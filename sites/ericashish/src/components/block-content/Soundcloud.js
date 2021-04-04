/** @jsx jsx */
import { jsx } from "theme-ui"
import Soundcloud from 'c32-gatsby-theme-components/src/components/audio/soundcloud'

function SanitySoundcloud (props) {
  const soundCloudTrack = props.track
  const soundCloudURL= `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/`+soundCloudTrack+`&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`
  return (
    <Soundcloud soundcloudSrcURL={soundCloudURL} soundcloudTitle={props.title} height={props.height}  />
  )
}

export default SanitySoundcloud
