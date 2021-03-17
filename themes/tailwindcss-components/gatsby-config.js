module.exports = (options) => ({
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: options.contentPath || `src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: options.assetPath || `src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: options.contentPath || `src/pages`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `framer-motion`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
        cssLoaderOptions: {},
      },
    },
  ],
})
