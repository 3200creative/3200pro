module.exports = {
  siteMetadata: {
    title: `C32 Base`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `LocalizedPro`,
    siteUrl: `https://dagaztherapy.com/`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
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
        link: `/about/`,
        subMenu: [
          {
            name: 'Initial Consultation',
            link: '/therapy-counseling-maple-grove-consultation/',
          },
          {
            name: 'Payments and Insurance',
            link: '/minnesota-therapy-counseling-payments-insurance/',
          },
        ]
      },
      {
        name: `Services`,
        link: `/services/`,
        subMenu: [
          {
            name: 'Individual Therapy',
            link: '/services/maple-grove-minnesota-individual-therapy-therapist-counseling/',
          },
          {
            name: 'Chemical Health Counseling',
            link: '/services/chemical-health-counseling-maple-grove-minnesota-therapy/',
          },
          {
            name: 'Chemical Health/Rule 25 Assessment',
            link: '/services/chemical-health-rule-25-assessment-minnesota-maple-grove/',
          },
          {
            name: 'Parenting Support/Family Therapy',
            link: '/services/parenting-support-family-therapy-maple-grove-minnesota/',
          },
          {
            name: 'Telehealth Counseling',
            link: '/services/telehealth-counseling-minnesota-therapy-counseling/',
          },
        ]
      },
      {
        name: 'Schedule Appointment',
        link: `/scheduling/`,
      },
      {
        name: 'Contact',
        link: `/contact-maple-grove-mn-therapist/`,
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
        projectId: 'kw4k4btd',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: 'skLfgMO7jqisPXF329znNpxLrAcF5tFOo7w2RGWT0QAglPTtexq0pohDqjhnc1sNDZVpZGIwMur1793h46r4h4IRWiMiRhjmtJu5NJKtLE5OyLT4MNLCq6CmNcA5QN18Zv6pa5QytkuVisl2FXWttDTttHADe7SP6mqOHiTqTX3cAEOpisD3',
        // If the Sanity GraphQLs API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170287303-1",
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
