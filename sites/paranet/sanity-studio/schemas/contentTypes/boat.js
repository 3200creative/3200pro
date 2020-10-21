export default {
    name: 'boat',
    type: 'document',
    title: 'Boat',
    fields: [
        {
            name: 'archiveOrder',
            title: 'Archive Order',
            description: 'Number Value. If two boats have the same number, the most recent will be first.',
            type: 'number'
        },
        {
            name: 'title',
            title: 'Admin Title',
            type: 'string'
        },
        {
            name: 'displayedTitle',
            title: 'Displayed Title',
            type: 'string'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontends will require a slug to be set to be able to show the post',
            options: {
              source: 'title',
              maxLength: 96
            }
          },
        {
            name: 'featuredImage',
            type: 'featuredImage',
            title: 'Featured Image'
        },
        {
            name: 'boatType',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{type: 'boatType'}]
              }
            ]
        },
        {
            name: 'excerpt',
            type: 'excerptPortableText',
            title: 'Excerpt'
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Body'
        },

        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ],
    preview: {
      select: {
        title: 'title',
        archiveOrder: 'archiveOrder',
        boatType: 'boatType.0.title'
      },
      prepare: ({title, archiveOrder, boatType}) => {
        const order = archiveOrder
        const boatTypeName = boatType
        return {
          title,
          subtitle: `order: `+order+` | `+boatTypeName
        }
      }
    },
    orderings: [
        {
          title: 'Boat Order',
          name: 'archiveOrdering',
          by: [
            {field: 'archiveOrder', direction: 'asc'}
          ]
        },
      ]
    
}