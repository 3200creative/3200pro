/* eslint no-unused-vars:0 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import BlockText from './block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from '../../client-config'

function testimonialPreview (props) {
  return (
    <div sx={{variant: 'variants.postPreview'}}>
      <div
    sx={{
      p: [2, null, null, 5],
      variant: 'variants.postPreview.overlay',
      variant: 'variants.shadow'
      }}>
      <h4
      sx={{
        fontSize: [28, null, 30, 40],
        paddingTop: [0,3],
        m: 0
      }}
      >{props.title}</h4>
      {props._rawBlockContent && (
          <BlockText blocks={props._rawBlockContent} />
      )}
      </div>
    </div>
  )
}

export default testimonialPreview