export default{
    name: 'tags',
    type: 'object',
    title: 'Tags',
    fields: [
      {
        title: "Tags",
        name: "tags",
        type: "array",
        of: [{type: "string"}],
        options: {
          layout: "tags"
        }
      },
    ]
}