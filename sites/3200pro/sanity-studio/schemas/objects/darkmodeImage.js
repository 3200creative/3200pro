export default {
    name: 'darkmodeImage',
    title: 'Darkmode Image',
    type: 'object',
    fields: [
      {
        name: 'primaryImage',
        title: 'Primary Image',
        type: 'image',
        options: {
          hotspot: true
        },
      },
      {
        name: 'darkmodeImage',
        title: 'Darkmode Image',
        type: 'image',
        options: {
          hotspot: true
        },
      },
      {
        title: 'Disable GatsbyImage',
        name: 'disableGatsbyImage',
        type: 'boolean',
      },
      {
        title: 'Disable Dropshadow',
        name: 'disableDropshadow',
        type: 'boolean',
      },
      {
        title: 'Max Width',
        name: 'maxWidth',
        type: 'string',
      },
      {
        name: 'alt',
        title: 'Alternative text',
        type: 'string',
        options: {
          isHighlighted: true
        }
      }
    ]
  }