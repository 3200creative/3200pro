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
        subMenu: [
          {
            name: 'Initial Consultation',
            link: '/therapy-counseling-maple-grove-consultation',
          },
          {
            name: 'Payments and Insurance',
            link: '/minnesota-therapy-counseling-payments-insurance',
          },
        ]
      },
      {
        name: `Services`,
        link: `/services`,
        subMenu: [
          {
            name: 'Individual Therapy',
            link: '/services/maple-grove-minnesota-individual-therapy-therapist-counseling',
          },
          {
            name: 'Chemical Health/Rule 25 Assessment',
            link: '/services/chemical-health-rule-25-assessment-minnesota-maple-grove',
          },
          {
            name: 'Telehealth Counseling',
            link: '/services/telehealth-counseling-minnesota-therapy-counseling',
          },
          {
            name: 'Parenting Support/Family Therapy',
            link: '/services/parenting-support-family-therapy-maple-grove-minnesota',
          },
          {
            name: 'Chemical Health Counseling',
            link: '/services/chemical-health-counseling-maple-grove-minnesota-therapy',
          },
          {
            name: 'Parenting Support/Family Therapy',
            link: '/services/parenting-support-family-therapy-maple-grove-minnesota',
          },
        ]
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
        projectId: 't6k5yf8j',
        dataset: 'production',
        watchMode: false,
        overlayDrafts: false,
        token: 'skJICpjfpYz6eWa4CpU6buKbKAr1K0q3ZMGzY1DBaKhgzLxEopuLPBANrJawxmko6ECgLt4NInrBSIXaWkoHl0ysUyJjUCnuUl3xc1IGKK223L4yZRDa7UgylezEQzPFS9OanJzvF1ga3hrGAXSCoO6JYmBIRG9DRpgouG3t9ItvzVeNoLTu',
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
