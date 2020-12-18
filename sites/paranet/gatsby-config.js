module.exports = {
  siteMetadata: {
    title: `Paranet`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://paranet.com/`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    social: {
      twitter: `@3200pro`,
    },
    menuLinks: [
      {
        name: `Not Real Link...`,
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
         //contentPath: `src/pages`,
        // assetPath: `content/assets`,
      },
    },
    `react-masonry-component`,
    `c32-gatsby-theme-components`,
    `react-modal`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'hl1dm5t9',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skFJbH3rsdX4H55m1JBKX9c3vhFBs1Lz1vGCiHT5Z9Oga7CuJSnznzNwtrpFyc9ZE8K4rpSZv5JB3CJaIFG41X5dGGThm0UUsJf9QDzQcVCFyAiB8HgfqbQIvS8L8o5mm4dcLtXHqxPKu9DgzKKYgSQgu2jcrMopJcU1BLi6EvzQTMtryt5t',
        // If the Sanity GraphQLs API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXX-1",
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
