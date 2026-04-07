/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── React ────────────────────────────────────────────────────────────────
  reactStrictMode: true,

  // ─── Output ───────────────────────────────────────────────────────────────
  // 'standalone' bundles only what's needed for production (smaller Docker images too)
  output: "standalone",

  // ─── Image Optimization ───────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"], // prefer AVIF → WebP → fallback
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ─── HTTP Headers ─────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent render-blocking by signaling keep-alive & priority hints
          { key: "Connection", value: "keep-alive" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // Long-term caching for static assets
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache Next.js generated JS/CSS chunks aggressively
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ─── Webpack Configuration ────────────────────────────────────────────────
  webpack(config, { dev, isServer }) {
    // ── 1. Compression (gzip + brotli) for all assets ──────────────────────
    if (!dev && !isServer) {
      // Gzip
      config.plugins.push(
        new CompressionPlugin({
          algorithm: "gzip",
          test: /\.(js|css|html|svg|json|woff2?)$/i,
          threshold: 8192, // only compress files > 8kb
          minRatio: 0.8,
          filename: "[path][base].gz",
        })
      );

      // Brotli (better compression ratio than gzip)
      config.plugins.push(
        new CompressionPlugin({
          algorithm: "brotliCompress",
          test: /\.(js|css|html|svg|json|woff2?)$/i,
          threshold: 8192,
          minRatio: 0.8,
          filename: "[path][base].br",
          compressionOptions: { level: 11 },
        })
      );
    }

    // ── 2. Aggressive Minification with Terser ──────────────────────────────
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true, // Use all CPU cores
            terserOptions: {
              parse: { ecma: 2020 },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,      // Strip all console.* in production
                drop_debugger: true,     // Strip debugger statements
                pure_funcs: [           // Mark these as side-effect-free
                  "console.log",
                  "console.info",
                  "console.warn",
                  "console.error",
                ],
                passes: 3,              // Run compress 3x for max reduction
                dead_code: true,        // Remove unreachable code
                unused: true,           // Remove unused variables/functions
                reduce_vars: true,
                collapse_vars: true,
                booleans_as_integers: false,
                if_return: true,
                join_vars: true,
                sequences: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,        // Strip all comments
                ascii_only: true,
              },
            },
            extractComments: false,     // Don't emit LICENSE.txt files
          }),
        ],

        // ── 3. Advanced Code Splitting ──────────────────────────────────────
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 30,
          maxAsyncRequests: 30,
          minSize: 10000,             // Only split chunks > 10kb
          maxSize: 244000,            // Split chunks > 244kb (HTTP/2 sweet spot)
          cacheGroups: {
            // React core — cached separately, changes rarely
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: "react-vendor",
              chunks: "all",
              priority: 40,
              enforce: true,
            },
            // Next.js internals
            nextjs: {
              test: /[\\/]node_modules[\\/]next[\\/]/,
              name: "next-vendor",
              chunks: "all",
              priority: 30,
              enforce: true,
            },
            // Framer motion — large, separate chunk, loaded async
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: "framer-motion",
              chunks: "async",        // Only load when needed
              priority: 25,
              enforce: true,
            },
            // All other node_modules
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: 20,
              reuseExistingChunk: true,
            },
            // Shared app code used in 2+ chunks
            common: {
              name: "common",
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },

        // ── 4. Module IDs — deterministic for long-term caching ─────────────
        moduleIds: "deterministic",
        chunkIds: "deterministic",

        // ── 5. Tree Shaking ────────────────────────────────────────────────
        usedExports: true,
        sideEffects: true,
        providedExports: true,
        innerGraph: true,             // Analyse module internals for unused exports
      };
    }

    // ── 6. Resolve aliases for cleaner imports ──────────────────────────────
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "/app/components",
      "@sections": "/app/sections",
      "@hooks": "/app/hooks",
      "@lib": "/app/lib",
      "@types": "/app/types",
    };

    // ── 7. SVG as React Components (no extra runtime) ───────────────────────
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false },
                { name: "removeComments", active: true },
                { name: "removeEmptyAttrs", active: true },
                { name: "removeUselessDefs", active: true },
                { name: "cleanupIDs", active: true },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },

  // ─── Experimental Features ────────────────────────────────────────────────
  experimental: {
    // Optimise CSS — inline critical CSS, defer non-critical
    optimizeCss: false,
    // Partial Prerendering (PPR) - mix static + dynamic per page
    ppr: false,
    // Turbopack for faster dev builds (opt-in)
    // turbo: { ... },
  },

  // ─── Compiler (SWC) ──────────────────────────────────────────────────────
  compiler: {
    // Remove console.* calls in production
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error"] }
        : false,
    // Remove React test ids in production
    reactRemoveProperties:
      process.env.NODE_ENV === "production"
        ? { properties: ["^data-testid$"] }
        : false,
  },

  // ─── TypeScript ───────────────────────────────────────────────────────────
  typescript: {
    ignoreBuildErrors: false,
  },

  // ─── ESLint ───────────────────────────────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: false,
  },

  // ─── Powered-by header ────────────────────────────────────────────────────
  poweredByHeader: false,

  // ─── Compression (built-in gzip for HTML responses) ──────────────────────
  compress: true,

  // ─── Trailing slash normalisation ────────────────────────────────────────
  trailingSlash: false,
};

module.exports = withBundleAnalyzer(nextConfig);
