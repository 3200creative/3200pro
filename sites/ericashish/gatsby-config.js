require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

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
        watchMode: true,
        overlayDrafts: true,
        token: 'skXsAKOITVxtKEQySYGz5PcD3ZkFNb6D1H3qpqXaY2bcdht5YHhxo8ygpY4a9sXCURQQASBtEN2Ppokgpc5rMIaz7x8LMPdyCXdDCIpeLQc17lK2rW6kGrNuhhhE3h3n8J5UM4JRyhAFBLqyNw36QnnFaBTcVyKCZP9FllPr5e0iOZCYxwmf',
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://ericashish.us4.list-manage.com/subscribe/post?u=cda672f3b1162d01cf56c61c1&amp;id=38ae0a77a2', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `novela-sanity-header`,
  ],
}
