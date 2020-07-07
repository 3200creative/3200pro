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
      variant: 'variants.postPreview.overlay',
      }}>
      <h4
      sx={{
        marginTop: '3vw',
        paddingTop: '3vw',
        fontSize: [28, null, 30, 40]
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