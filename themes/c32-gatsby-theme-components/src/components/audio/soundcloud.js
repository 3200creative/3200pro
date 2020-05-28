
/** @jsx jsx */
import { jsx } from "theme-ui"
const Soundcloud = ({ soundcloudSrcURL, soundcloudTitle, height, ...props }) => (
    <iframe
    sx={{
      variant: 'variants.shadow',
      my: 30,
    }}
      width= '100%'
      height= {height ? height : '166'}
      scrolling='no'
      frameborder='no'
      allow='autoplay'
      src={soundcloudSrcURL}
      title={soundcloudTitle}
    />
)
export default Soundcloud