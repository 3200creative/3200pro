/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

function Spacer (props) {
  return (
    <>
    {(props.spacerType === 'clearline' && (<div sx={{variant: 'variants.clearline'}}></div>)) || ('clear')}
    </>
  )
}

export default Spacer;
