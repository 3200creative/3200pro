export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
        {
            name: 'header',
            title: 'GizmosMN Header Text',
            type: 'string'
        },
        {
            name: 'ccHeader',
            title: 'CustomCars Header Text',
            type: 'string'
        },
        {
            name: 'heroImage',
            title: 'GizmosMN First Background Image',
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