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
        title: 'Show Post Layout',
        name:'showToggle',
        type:'boolean'
      },
      {
        title: 'Content Type',
        name: 'contentType',
        type: 'string',
        options: {
          list: [
            {title: 'Business', value: 'business'},
            {title: 'Event', value: 'event'},
            {title: 'Music', value: 'music'},
            {title: 'Tea', value: 'tea'},
            {title: 'Life', value: 'life'},
          ]
        }
      },
      {
        title: 'Feature First Post',
        name: 'featureFirstPost',
        description: 'This will make the first post bigger.',
        type: 'boolean',
      },
      {
        title: 'Post Count',
        name: 'postCount',
        description: '6 posts is default',
        type: 'number',
      },
    ]
  }