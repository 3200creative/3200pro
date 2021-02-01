const remarkSlug = require("remark-slug")

module.exports = options => {
  return {
    siteMetadata: {
      title: `Placeholder title`,
      description: `Placeholder description`,
      keywords: [`gatsby`],
      author: `Placeholder author`,
      siteUrl: `https://www.gatsbyjs.org`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
      social: {
        twitter: `Placeholder Twitter`,
      },
      menuLinks: [
        {
          name: `Placeholder Menu Link`,
          link: `/`,
        },
      ],
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: options.contentPath || `content/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: options.contentPath || `content/pages`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: {
            default: require.resolve("./src/components/layout.js"),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1440,
                linkImagesToOriginal: false,
                withWebp: true,
                backgroundColor: `transparent`,
              },
            },
            {
              resolve: `gatsby-remark-copy-linked-files`,
              options: {
                destinationDir: `content/assets`,
              },
            },
            { resolve: `gatsby-remark-smartypants` },
            { resolve: `gatsby-remark-reading-time` },
          ],
          remarkPlugins: [remarkSlug],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1440,
                linkImagesToOriginal: false,
                withWebp: true,
                backgroundColor: `transparent`,
              },
            },
          ],
        },
      },
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-offline`,
      `framer-motion`,
      `gatsby-plugin-material-ui`,
    ],
  }
}
