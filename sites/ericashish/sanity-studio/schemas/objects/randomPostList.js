export default {
  name: 'randomPostList',
  type: 'array',
  title: 'Related Post List',

  options: {
    defaultCount: 3,
    // this function can be async
    async resolve(data, document, client) {
      return data
      // example, select only posts with a publish date
      // return data.filter(post => {
      //   return !!post.publishedAt
      // })
    },
  },
  of: [
    {
      type: 'reference',
      to: [
        {
          type: 'music',
        },
        {
          type: 'life',
        },
        {
          type: 'business',
        },
        {
          type: 'tea',
        },
      ],
    },
  ],
}
