
export default {
    title: 'SoundCloud Playlist Embed',
    name: 'soundcloudPlaylist',
    type: 'object',
    fields: [
      {
        title: 'SoundCloud Playlist ID',
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