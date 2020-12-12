export default {
    name: 'featuredImage',
    title: 'Featured Image',
    type: 'image',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'alt',
        title: 'GizmosMN Alternative text',
        type: 'string',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'ccAlt',
        title: 'Custom Cars Alternative text',
        type: 'string',
        options: {
          isHighlighted: true
        }
      }
    ]
  }