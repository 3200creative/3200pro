export default {
    name: 'singularFeaturedPost',
    title: 'Singular Featured Post',
    type: 'object',
    fields: [
      {
        title: 'Featured Post',
        name: 'featuredPost',
        type: 'reference',
        to: {type: 'business'},
      },
    ],
  }