export default {
    name: 'podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'episodeNumber',
            title: 'Episode Number',
            type: 'number'
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
            title: 'Soundcloud URL',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
        {
            name: 'podcastImages',
            type: 'featuredPodcastImages',
            title: 'Featured and Guest Images',
        },
        {
            name: 'blockContent',
            title: 'Podcast Introduction',
            type: 'blockContent'
        },
        {
            title: 'Additional Content',
            name: 'additionalContent',
            type: 'blockContent',
        },
        {
            title: 'Quote',
            name: 'quote',
            type: 'quote',
            row: 3,     
        },
        {
            title: 'URL Of Show',
            name: 'urlOfShow',
            type: 'simpleUrl',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ]
}