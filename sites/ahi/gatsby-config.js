module.exports = {
  siteMetadata: {
    title: `C32 Base`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `LocalizedPro`,
    siteUrl: `https://affordablehomeimprovementz.com/`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    social: {
      twitter: `@localizedpro`,
    },
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Galleries`,
        link: `/home-improvement-galleries`,
        subMenu: [
          {
            name: 'Elevated Tubs',
            link: 'elevated-tubs',
          },
          {
            name: 'Bathroom Examples',
            link: 'minnesota-bathroom-remodeling-company',
          },
          {
            name: 'Bathroom Tile Examples',
            link: 'minnesota-bathroom-remodeling-consultant',
          }
        ]
      },
      {
        name: 'Contact',
        link: `/contact`,
      },
      {
        name: `612-500-8717`,
        link: `tel:612-500-8717`,
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
        projectId: 'ws0rvaun',
        dataset: 'production',

        // If the Sanity GraphQLs API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
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
