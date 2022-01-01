module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./**/*.html", "./**/*.scss", "./**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
