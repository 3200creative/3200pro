/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from "theme-ui"
import Soundcloud from 'c32-gatsby-theme-components/src/components/audio/soundcloud'
const sanityConfig = {projectId: 'tjb00633', dataset: 'production'}

function SanitySoundcloudPlaylistDropdown (props) {
  let selectedPlaylist = props.playlists[0].track
  const playlistItems = props.playlists.map((playlist) =>
    <option key={playlist.title} value={playlist.track}>Playlist: {playlist.title}</option>
  );
  const [playlistSelected, setPlayList] = useState(selectedPlaylist);
  
  const changePlaylist= (e) => {
    const playlistSel = e.target.value;
    setPlayList(playlistSel)
  }
  return (
    <>
    <form>
      <select value={playlistSelected} onChange={e => changePlaylist(e)}>
      {playlistItems}
      </select>
    </form>
    <Soundcloud soundcloudSrcURL={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/`+playlistSelected+`&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"`} height={props.height ? props.height : '315'}   />
    </>
  )
}

export default SanitySoundcloudPlaylistDropdown