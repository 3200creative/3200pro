import React from 'react'
import Gist from 'react-gist'

const Script = ({ scriptURL, ...props }) => (
  <div>
    <Gist id={scriptURL} />
  </div>
)
export default Script
