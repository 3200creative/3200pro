/** @jsx jsx */
import { jsx } from "theme-ui"
import Video from 'c32-gatsby-theme-components/src/components/video/video'

function SanityVideo (props) {
  const video = `//fast.wistia.net/embed/iframe/`+props.id+``
  return (
    <Video videoSrcURL={video} videoTitle={props.title} />
  )
}

export default SanityVideo
