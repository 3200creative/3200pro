export default {
    name: 'aboutPage',
    type: 'document',
    title: 'About Page',
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
            title: 'First Background Image',
            type: 'featuredImage'
        },
        {
            name: 'blockContent',
            title: 'GizmosMN Content',
            type: 'blockContent'
        },
        {
            name: 'ccBlockContent',
            title: 'Gizmos Custom Cars Content',
            type: 'blockContent'
        },
        {
            name: 'seo',
            title: 'GizmosMN SEO Title And Description',
            type: 'meta',            
        },
        {
            name: 'ccSeo',
            title: 'GizmosCustomCars SEO Title And Description',
            type: 'meta',            
        },
    ],
}