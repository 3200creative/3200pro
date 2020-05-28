export default {
    name: 'event',
    type: 'document',
    title: 'Event',
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
            title: 'Event Date',
            name: 'eventDate',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
              calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Featured Image/Video',
            of: [
                {
                    title: 'Featured Video',
                    type: 'video', 
                },
                {
                    title: 'Featured Image',
                    type: 'featuredImage', 
                },
            ]
        },
        {
            title: 'Optional Onsite Event Info',
            name: 'eventInfo',
            type: 'blockContent',
        },
        {
            title: 'Optional Offsite Event Info (URL)',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'tags'
        },
        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ],
}