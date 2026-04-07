import type { Config } from "tailwindcss";

const config: Config = {
  // ── Purge unused CSS — critical for performance ──────────────────────────
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // ── Dark mode via class strategy (matches our bulb toggle) ───────────────
  darkMode: "class",

  theme: {
    extend: {
      // ── Custom font families ──────────────────────────────────────────────
      fontFamily: {
        head: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },

      // ── Design token colours (CSS variables for theme switching) ──────────
      colors: {
        bg: {
          primary: "var(--bg)",
          secondary: "var(--bg2)",
          tertiary: "var(--bg3)",
        },
        surface: "var(--card)",
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border2)",
        },
        content: {
          primary: "var(--text)",
          secondary: "var(--text2)",
          muted: "var(--text3)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent2)",
          glow: "var(--accent-glow)",
          subtle: "var(--accent-soft)",
        },
        success: "var(--green)",
      },

      // ── Spacing ───────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      // ── Border radius ─────────────────────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },

      // ── Typography scale ──────────────────────────────────────────────────
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "10xl": ["10rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },

      // ── Animation ─────────────────────────────────────────────────────────
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.6" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        cordPull: {
          "0%": { transform: "scaleY(1)" },
          "40%": { transform: "scaleY(1.3)" },
          "70%": { transform: "scaleY(0.9)" },
          "100%": { transform: "scaleY(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        cordPull: "cordPull 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },

      // ── Box shadows ───────────────────────────────────────────────────────
      boxShadow: {
        accent: "0 8px 30px rgba(124, 106, 247, 0.4)",
        "accent-sm": "0 4px 14px rgba(124, 106, 247, 0.25)",
        card: "0 2px 8px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};

export default config;
