
export default {
    title: 'SoundCloud Playlist Dropdown Menu',
    name: 'soundcloudPlaylistDropdown',
    type: 'object',
    fields: [
      {
        name: 'playlists',
        type: 'array',
        title: 'Playlists',
        of: [
          {
            title: 'Playlist',
            type: 'soundcloudPlaylist', 
          },
        ],
      },
    ]
  }