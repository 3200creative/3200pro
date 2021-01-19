export default {
    name: 'featuredPodcastImages',
    type: 'object',
    title: 'Featured Podcast Images',
    fields: [
        {
            title: 'Featured Image',
            name: 'featuredImage',
            type: 'featuredImage',     
        },
        {
            title: 'Guest Photo',
            name: 'guestPhoto',
            type: 'figure',
        },
    ],
}