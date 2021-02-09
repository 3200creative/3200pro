export default {
    name: 'teamMember',
    type: 'document',
    title: 'Team Members',
    fields: [
        {
            name: 'title',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            options: {
                list: [
                  {title: 'Attorney', value: 'attorney'},
                  {title: 'Paralegal', value: 'paralegal'},
                  {title: 'Legal Assistant', value: 'legal assistant'},
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              }
        },
        {
            name: 'featuredImage',
            type: 'featuredImage',
            title: 'Featured Image'
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Body'
        },
    ],
}