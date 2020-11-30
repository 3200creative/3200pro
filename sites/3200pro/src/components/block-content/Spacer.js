/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

function Spacer (props) {
  return (
    <>
    {(props.spacerType == 'clearline' && (
    <div sx= {{variant: 'variants.clearline'}}></div>
    )) || (<div sx= {{variant: 'variants.clear'}}></div>)}
    </>
  )
}

export default Spacer;
