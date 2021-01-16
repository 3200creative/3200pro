export default {
  name: 'figure',
      type: 'object',
      fields: [
        {
          name: 'alt',
          type: 'string'
        },
        {
          name: 'caption',
          type: 'string'
        },
        {
          name: 'link',
          type: 'string'
        },
        {
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          title: 'Disable GatsbyImage',
          name: 'disableGatsbyImage',
          type: 'boolean',
        },
      ]
}
