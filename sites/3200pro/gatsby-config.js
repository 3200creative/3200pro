module.exports = {
  siteMetadata: {
    title: `3200.pro`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://3200.pro/`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    social: {
      twitter: `@3200pro`,
    },
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Profile`,
        link: `/freelance-gatsby-developer`,
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Reviews',
        link: '/gatsby-developer-reviews'
      },
      {
        name: 'Contact',
        link: `/minneapolis-website-developer-contact`,
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
    `@twistezo/react-text-scramble`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'p6aj32cv',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skqjIQ0mTiREo7FiDTRHyrMCbZaz52KL3SCA6xl7YNxo8XFzvhv3wu1nz34eXIyHiCLeHeTGZcA0kB2rYTXnwsrlq1ArwK0MV7QcxsjJW6gADp5zd1dt6MnfQlbzMnR3l2kJ0QEe2seQD22xx2n0fhqc8od4e3hViLiqHCqWemf6Yv76ISvx',
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
