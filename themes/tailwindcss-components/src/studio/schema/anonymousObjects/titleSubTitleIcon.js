export default {
    title: 'Title, Sub-Title, Icon',
    name: 'titleSubTitleIcon',
        type: 'object',
        fields: [
            {
                title: 'Title',
                name: 'title',
                type: 'string'
            },
            {
                title: 'Sub Title',
                name: 'subTitle',
                type: 'text',
                rows: '3'
            },
            {
                title: 'Icon',
                name: 'icon',
                type: 'heroIcon'
            }
        ]
}