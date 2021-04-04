/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from 'react'

function HTML (props) {
  const html = () => {
    return { __html: props.html  }
}
  return (
    <>
    <div dangerouslySetInnerHTML={html()} />
    </>
  )
}

export default HTML
