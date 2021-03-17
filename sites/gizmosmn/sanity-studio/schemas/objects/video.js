export default {
    title: 'Video Embed',
    name: 'video',
    type: 'object',
    description: 'Example: http://fast.wistia.net/embed/iframe/26sk4lmiix',
    fields: [
      {
        title: 'Video URL',
        name: 'url',
        type: 'url',
      },
      {
        title: 'Video Title',
        name: 'title',
        type: 'string',
      }
    ]
  }