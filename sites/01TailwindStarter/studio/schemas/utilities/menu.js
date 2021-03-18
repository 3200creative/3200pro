export default {
  name: 'menu',
  type: 'document',
  title: 'Menus',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'Admin Info',
      name: 'adminInfo',
      type: 'string',
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'navItem' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'adminInfo',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
}
