module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require(`postcss-import`),
    require(`postcss-mixins`),
    require(`tailwindcss`),
  ],
};
