module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          cssnano: {
            preset: ["default", {
              discardComments: { removeAll: true },
              mergeLonghand: true,
              mergeRules: true,
              minifyFontValues: true,
              minifyGradients: true,
              normalizeWhitespace: true,
            }],
          },
        }
      : {}),
  },
};