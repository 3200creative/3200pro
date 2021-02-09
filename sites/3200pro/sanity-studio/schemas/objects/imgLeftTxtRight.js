export default {
  name: 'imgLeftTxtRight',
  type: 'object',
  title: 'Image Left Text Right',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string' ,
    },
    {
      name: 'blockImage',
      title: 'Block Image',
      type: 'image',
      options: {
        hotspot: true,
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
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'blockContent',
      title: 'Content',
      type: 'blockContent'
    },
  ]
}
