export default {
    name: 'recentProductFeed',
    title: 'Recent Product Feed',
    type: 'object',
    fields: [
      {
        title: 'Optional Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Optional Title Link',
        name: 'link',
        type: 'url',
        validation: (Rule) =>
          Rule.uri({
            allowRelative: true,
            scheme: ["https", "http", "mailto"],
          }),
      },
      {
        title: 'Show All Categories',
        name: 'allCategories',
        type: 'boolean'
      },
      {
        title: 'Show Specific Product Category',
        description: "only applies if 'show all categories' is not used.",
        name: 'contentType',
        type: 'reference',
        to: [{type: 'productCategory'}]
      },
      {
        title: 'Product Count',
        name: 'productCount',
        description: '6 posts is default',
        type: 'number',
      },
      {
        title: 'Enable Button To Shop Page',
        name: 'showArchiveBtn',
        type: 'boolean'
      }
    ],
  }