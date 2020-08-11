module.exports = {
  siteMetadata: {
    title: `fishmaui.com`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://fishmaui.com/`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
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
    `c32-gatsby-theme-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '4m7jmrdc',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skRoZK5ZyiFgMOW5oDQkXtN3K3qt4rg4fHtsVzlsueh9OgEEEJuaJdHT3PDQYyatHukSiCJAifrcXYviIIFV7uDLnwSRfpYStQEtU0yrv3LC6ZqFVDgFxTSTUUW95Lcw6vzjnmeLfQbJO2iAa1zsikGzN68tdAiV3DLbfe8htDUyUcybOtXm',
        // If the Sanity GraphQLs API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-2895202-1",
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
