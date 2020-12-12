/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from "theme-ui"
import Soundcloud from 'c32-gatsby-theme-components/src/components/audio/soundcloud'
import { graphql, useStaticQuery } from 'gatsby';
const sanityConfig = {projectId: 'tjb00633', dataset: 'production'}

function SanitySoundcloudPlaylistDropdown (props) {
  const data = useStaticQuery(graphql`
    query {
      colors: sanityGlobalOptions {
        teaColor {
            hex
          }
          musicColor {
            hex
          }
          lifeColor {
            hex
          }
          businessColor {
            hex
          }
    }
    }
  `)
  const color = data.colors.musicColor.hex
  let selectedPlaylist = props.playlists[0].track
  const playlistItems = props.playlists.map((playlist) =>
    <option key={playlist.title} value={playlist.track}>{playlist.title}</option>
  );
  const [playlistSelected, setPlayList] = useState(selectedPlaylist);
  
  const changePlaylist= (e) => {
    const playlistSel = e.target.value;
    setPlayList(playlistSel)
  }
  return (
    <div>
    <form>
      <select value={playlistSelected} onChange={e => changePlaylist(e)} sx={{background: color,variant: 'variants.shadow', color: 'white', border: 'none', borderRadius: 12, px: 2, py: 1}}>
      {playlistItems}
      </select>
    </form>
    <div sx={{variant: 'variants.shadow', mt: 4, iframe: {m:0}}}><Soundcloud soundcloudSrcURL={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/`+playlistSelected+`&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"`} height={props.height ? props.height : '315'}   /></div>
    </div>
  )
}

export default SanitySoundcloudPlaylistDropdown