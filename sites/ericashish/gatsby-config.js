require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Eric Ashish`,
    description: `Creating music, serving tea, podcasting, exploring wellness and lifestyle.`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://www.ericashish.com/`, 
    social: {
      twitter: `@ericashish`,
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
        watchMode: true,
        overlayDrafts: true,
        token: 'sk1hkTiVeAZT81lP96H1cACPBppV7soAZjXiyvk36rwj6BKWM7NpIvWtfJufJEm016opyhDxAOCsxdozgw9zTm9eNLDqaKVAR1obX8F4zJiFVH1rUUoq5oTZHCAtCqpFFMwHMl9U7XZCpYoE0RKlVXGndtBTkESWgdHIxm7JNmvhKNAak6wu',
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
        icon: `content/assets/ericAshish-Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://ericashish.us4.list-manage.com/subscribe/post?u=cda672f3b1162d01cf56c61c1&amp;id=38ae0a77a2', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `novela-sanity-header`,
    'date-fns'
  ],
}
