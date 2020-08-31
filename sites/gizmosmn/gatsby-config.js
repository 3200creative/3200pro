module.exports = {
  siteMetadata: {
    title: `C32 Base`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `LocalizedPro`,
    siteUrl: `https://gizmosmn.com/`, 
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
        name: ` Showcase`,
        link: `/minnesota-custom-car-shop-showcase`,  
      },
      {
        name: 'Contact',
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
        projectId: 'yit7sywj',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skd4pqxAgC30xbpOEMgGsznWIRNPkardVMWWod6LHuJBT9Dk0xQIgTDy92idS0cqXm4pzAlaPDxRy7Ll7TQszj1fFI3lrm7grLvVln36wF95EnaQJVKlQUXvCEChAVEjKYv9AlmBL7hpQc6EvyQZ9gyy05lMXKuN0ACzrvkklDFnttpyXVAc',
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
