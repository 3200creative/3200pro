module.exports = {
  siteMetadata: {
    title: `fynn`,
    description: `fynn`,
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
        projectId: 'lur7q35c',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skSsooUkUCeZk1ufDyXRb3yBQPEAozUbvw6rRcfrQKMVXXoFIL42RmfdclrSuSedF8dWgVD1MQ0nMGemcN2QgdbYwB7yLoVeBjtDhQ4L6TT6miyQFrVn44UVCrFu30o406ksRHp1suCOMArVXQLJSQzPUw2kYoLE9PKFmtea7kdqcDrAhqIC',
        // If the Sanity GraphQLs API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXX-XXX",
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
        icon: `content/assets/placeholder.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
