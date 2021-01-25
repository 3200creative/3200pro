export default {
    name: 'teamMember',
    type: 'document',
    title: 'Team Member',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Name',
            description: 'A team position must be added under the team position content type to be available here.',
            type: 'reference',
            to: [
                {
                    type: 'teamPosition'
                }
            ]
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'featuredImage'
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Bio'
        },
    ],
}