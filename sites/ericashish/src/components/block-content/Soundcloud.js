/** @jsx jsx */
import { jsx } from "theme-ui"
import Soundcloud from 'c32-gatsby-theme-components/src/components/audio/soundcloud'

function SanitySoundcloud (props) {
  return (
    <Soundcloud soundcloudSrcURL={props.url} soundcloudTitle={props.title} height={props.height}  />
  )
}

export default SanitySoundcloud
