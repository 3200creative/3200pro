export default {
    name: 'music',
    type: 'document',
    title: 'Music',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'Menu Item',
            type: 'array',
            title: 'Menu Items',
            of: [
                {
                    title: 'Image',
                    type: 'figure', 
                },
            ]
        },
    ],
}