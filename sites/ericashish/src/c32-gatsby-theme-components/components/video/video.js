import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <>
    <iframe
    sx={{
      mx: 'auto',
      my: 40,
      display: 'block',
      width: ['640px'],
      maxWidth: '100%',
      variant: 'variants.video'
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