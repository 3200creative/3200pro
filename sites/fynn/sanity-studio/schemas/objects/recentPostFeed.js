export default {
    name: 'recentPostFeed',
    title: 'Recent Post Feed',
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
        title: 'Show Specific Post Category',
        description: "only applies if 'show all categories' is not used.",
        name: 'contentType',
        type: 'reference',
        to: [{type: 'category'}]
      },
      {
        title: 'Post Count',
        name: 'postCount',
        description: '6 posts is default',
        type: 'number',
      },
      {
        title: 'Enable Button To Archive',
        name: 'showArchiveBtn',
        type: 'boolean'
      }
    ],
  }