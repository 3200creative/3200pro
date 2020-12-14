/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

function Spacer (props) {
  return (
    <>
    {(props.spacerType === 'clearline' && (<div sx={{variant: 'variants.clearline', my:props.size}}></div>)) || (<div sx={{variant: 'variants.clear', my:props.size}}></div>)}
    </>
  )
}

export default Spacer;
