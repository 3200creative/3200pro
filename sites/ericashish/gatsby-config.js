module.exports = {
  siteMetadata: {
    title: `C32 Base`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Eric Howey`,
    siteUrl: `https://www.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    social: {
      twitter: `@erchwy`,
    },
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Projects`,
        link: `/projects`,
        subMenu: [
          {
            name: `Earth`,
            link: `/projects/earth`,
          },
          {
            name: `Wind`,
            link: `/projects/wind`,
          },
          {
            name: `Sky`,
            link: `/projects/sky`,
          },
          {
            name: `Fire`,
            link: `/projects/fire`,
          },
        ],
      },
      {
        name: `Contact`,
        link: `/contact`,
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
        projectId: 'tjb00633',
        dataset: 'production',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
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
    `novela-sanity-header`,
  ],
}
