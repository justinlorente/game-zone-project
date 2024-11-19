module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "game-zone-template",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
          postCssPlugins: [
              require(`tailwindcss`), //workig
              require(`postcss-functions`), // ?
              require(`postcss-import`), // ?
              require(`postcss-mixins`), // ?
              // require(`postcss-advanced-variables`), // is not working properly
              require("postcss-simple-vars"),
              require(`postcss-nested`), //working
              require(`autoprefixer`), // ?
          ],
      },
  }
  ],
};
