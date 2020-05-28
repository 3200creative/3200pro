import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <>
    <iframe
    sx={{
      mx: 'auto',
      my: [40, 40, 100],
      display: 'block',
      variant: 'variants.shadow',
      width: ['640px'],
      height: ['360px'],
    }}
      
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </>
)
export default Video