export default {
    name: 'review',
    type: 'document',
    title: 'Review',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'boat',
            type: 'object',
            fields: [
              {
                title: 'Boat',
                name: 'boat',
                type: 'reference',
                to: [{type: 'boat'}]
              }
            ]
        },
        {
            name: 'reviewerName',
            title: 'Reviewer Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [
                    {title: '1 Star', value: '1'},
                    {title: '2 Star', value: '2'},
                    {title: '3 Star', value: '3'},
                    {title: '4 Star', value: '4'},
                    {title: '5 Star', value: '5'},
                ],
            }
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Body'
        },
        {
            name: 'adminResponse',
            type: 'blockContent',
            title: 'Admin Review Response'
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string'
        },
    ],
}