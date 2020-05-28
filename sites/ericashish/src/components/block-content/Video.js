/** @jsx jsx */
import { jsx } from "theme-ui"
import Video from 'c32-gatsby-theme-components/src/components/video/video'

function SanityVideo (props) {
  return (
    <Video videoSrcURL={props.url} videoTitle={props.title} />
  )
}

export default SanityVideo
