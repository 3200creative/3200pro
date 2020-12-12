module.exports = {
  siteMetadata: {
    title: `10 Second Recipes`,
    description: `Super Fast Recipes`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://10secondrecipes.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    social: {
      twitter: `@3200pro`,
    },
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
    ],
    footerLinks: [
      {
        name: `Terms Of Use`,
        link: `/terms`,
      },
      {
        name: 'Privacy Policy',
        link: '/privacy-policy',
      },
    ],
  },
  plugins: [
    {
      resolve: `c32-gatsby-theme-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `3200pro`
      }
    },
    `c32-gatsby-theme-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'oezz26tv',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'sk1IHb3naWrHmitAjxvFHIIl8QkcJh3tcmJnaJMe1qRhiCRZzknovl8f2Zg7otlgsvjqXyqkdT7U3djhkuYxb7uSGZbbyFRuP0DetV2uTR1pvfouSwWr3ZP2z5zqalFjqgThoG28tcm3J0b5Xm2pnJWcIDEv5Mk7w2v3gqAFnnpfMDTb1laq',
        // If the Sanity GraphQLs API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-24008671-13",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `c32-gatsby-site-base`,
        short_name: `c32`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/c32-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
