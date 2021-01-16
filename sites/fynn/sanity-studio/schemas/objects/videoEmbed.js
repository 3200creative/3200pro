export default {
    name: 'videoEmbed',
    type: 'object',
    title: 'Video Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'Video URL'
      },
      {
        name: 'provider',
        type: 'string',
        title: 'Video Provider',
        options: {
            list: [
                {title: 'YouTube', value: 'youtube'},
                {title: 'Vimeo', value: 'vimeo'},
            ],
            layout: 'radio'
        },
      },
    ]
  }