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
          name: "featuredImage",
          title: "Card Image",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              options: [
                {isHighlighted: true},
                {
                  list: [
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                  ], // <-- predefined values
                  layout: 'radio'
                },
              ],
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
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: Rule =>
                Rule.uri({
                  allowRelative: true,
                  scheme: ['https', 'http', 'mailto', 'tel'],
                }),
            },
          ],
          preview: {
            select: {
              imageUrl: "asset.url",
              title: "alt",
            },
          },          
        }
      ]
    }
  ]
}
