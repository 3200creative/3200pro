export default {
    name: 'galleryPage',
    type: 'document',
    title: 'Custom Car Showcase',
    fields: [
        {
            name: 'title',
            title: 'GizmosMN Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'GizmosMN Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'ccSlug',
            title: 'CustomCars Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            description: 'You can use this field to schedule post where you show them',
            type: 'datetime'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'number'
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'featuredImage'
        },
        {
            name: 'blockContent',
            title: 'GizmosMN Content',
            type: 'blockContent'
        },
        {
            name: 'ccBlockContent',
            title: 'CustomCars Content',
            type: 'blockContent'
        },
        {
            name: 'tags',
            title: 'GizmosMN Tags',
            type: 'tags'
        },
        {
            name: 'ccTags',
            title: 'CustomCars Tags',
            type: 'tags'
        },
        {
            name: 'seo',
            title: 'GizmosMN SEO Title And Description',
            type: 'meta',            
        },
        {
            name: 'ccSeo',
            title: 'CustomCars SEO Title And Description',
            type: 'meta',            
        },
    ],
}