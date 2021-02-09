import React from 'react'

const Soundcloud = ({
  soundcloudSrcURL,
  soundcloudTitle,
  height,
  ...props
}) => (
  <iframe
    width="100%"
    height={height || '166'}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={soundcloudSrcURL}
    title={soundcloudTitle}
  />
)
export default Soundcloud
