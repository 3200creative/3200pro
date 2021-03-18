module.exports = {
  siteMetadata: {
    title: `3200.pro`,
    description: `Placeholder description`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `3200.Pro`,
    siteUrl: `https://3200.pro/`, // Change to you site address, required for sitemap.xml and robots.txt file among other things
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
        link: '/blog',
      },
      {
        name: 'Reviews',
        link: '/gatsby-developer-reviews',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `3200pro`,
      },
    },
    'tailwindcss-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'cthv27ky',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token:
          'skRERfT4SaCvn0hseu3TlRUl1YxvQodHCuUGKVhtPhZcsYaKbZPNDBGBnL8yCrbanCRN0tcCmwSOiqqU02HNfHLUIwDZzkiQ47xYtvviLj4WKaEwOCg5URvoGabHtkFN6NsO4EajEmHSyxWzDx5aX0XVEvKtUkB9emXOucVl0IJUDTG9Jh1q',
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-24008671-13',
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
        icon: `src/assets/c32-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
