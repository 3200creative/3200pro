export default {
    title: 'SoundCloud Embed',
    name: 'soundcloud',
    type: 'object',
    fields: [
      {
        title: 'SoundCloud Track Number',
        name: 'track',
        description: 'Example: 837724294 (this can be found within the embed code)',
        type: 'string',
      },
      {
        title: 'SoundCloud Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Height',
        name: 'height',
        type: 'string',
      }
    ]
  }