export default {
    name: 'activity',
    type: 'document',
    title: 'Activity',
    fields: [
        {
            name: 'title',
            title: 'Admin Title',
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
            name: 'displayedTitle',
            title: 'Displayed Title',
            type: 'string'
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
}