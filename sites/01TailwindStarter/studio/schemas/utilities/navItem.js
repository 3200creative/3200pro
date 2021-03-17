export default {
  title: 'Navigation Item',
  name: 'navItem',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Page',
      name: 'pageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{ type: 'route' }],
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link',
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link'],
      },
    },
    {
      title: 'Make Link Relative To Current Page?',
      description: 'http://yourwebsite.com/currentpage/*****',
      name: 'relativeNavItem',
      type: 'boolean',
    },
    {
      title: 'Optional Sub Navigation',
      name: 'subnav',
      type: 'reference',
      to: [{ type: 'menu' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      page: 'pageRoute.slug.current',
      route: 'route',
      link: 'link',
    },
    prepare({ title, page, route, link }) {
      let subtitle = 'Not set'
      if (page) {
        subtitle = `Route: /${page}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle,
      }
    },
  },
}
