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
      title: 'Disable GatsbyImage',
      name: 'disableGatsbyImage',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "alt",
    },
  },
}
