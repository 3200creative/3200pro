module.exports = {
  siteMetadata: {
    title: `Fynn`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://www.fynnandfriends.com/`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
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
        projectId: 'lur7q35c',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skYfuuXBv313wO2tkh4gLGvbnURZUCNGHDsEuP6VEjv3bOjkGk2e3W61RyLKDw75tbtC2y8itaZoNxMsGmU93OurGS1xOsFggnlRZ6Cs8i51dHRuMim7mQv4N0Q2ZvGcZw7MteMQpadphp1ml8XtM7AyU8mqQ9wyiqhFhxJj0Gkk77xxP4JE',
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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: '************https://ericashish.us4.list-manage.com/subscribe/post?u=cda672f3b1162d01cf56c61c1&amp;id=38ae0a77a2', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
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
