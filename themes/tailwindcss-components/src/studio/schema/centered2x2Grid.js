export default{
    title: 'Stats',
    name: 'centered2x2Grid',
    type: 'object',
    fields: [
        {
            title: 'Pre-Title',
            name: 'preTitle',
            type: 'string'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Sub Title',
            name: 'subTitle',
            type: 'text'
        },
        {
            title: 'Info Item',
            name: 'gridItem',
            type: 'array',
            of: [
                {
                    type: 'titleSubTitleIcon',
                }
            ]
        }
    ]

}