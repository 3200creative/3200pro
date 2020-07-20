export default {
    name: 'featuredImage',
    title: 'Featured Image',
    type: 'image',
    fields: [
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