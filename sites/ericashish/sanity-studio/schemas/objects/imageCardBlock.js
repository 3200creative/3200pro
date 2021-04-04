export default {
    name: 'imageCardBlock',
    type: 'object',
    title: 'Image Card Block',
    fields: [
      {
        name: 'imageCards',
        type: 'array',
        title: 'Image Cards',
        of: [
          {
            name: "imageCard",
            title: "Image Card",
            type: "imageCard",          
          }
        ]
      }
    ]
  }
  