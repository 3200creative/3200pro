export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Caption",
      name: "caption",
      description: "Leave blank if you do not want a caption",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: Rule =>
        Rule.error("You have to fill out the alternative text.").required(),
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Positioning',
      name: 'positioning',
      type: 'string',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        name: 'options',
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Clearfix', value: 'clearfix' },
        ],
        isHighlighted: true,
      },
    },
    {
      title: 'Size',
      name: 'sizes',
      type: 'string',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        name: 'options',
        list: [
          { title: '100% Width', value: '100%' },
          { title: '66% Width', value: '66%' },
          { title: '50% Width', value: '50%' },
          { title: '33% Width', value: '33%' },
          { title: '25% Width', value: '25%' },
        ],
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "alt",
    },
  },
}
