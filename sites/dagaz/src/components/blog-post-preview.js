/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { getBlogUrl } from '../lib/helpers'
import BlockText from '../components/block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from '../../client-config'
import BackgroundImage from "gatsby-background-image"

function BlogPostPreview (props) {
  return (
    <div sx={{variant: 'variants.postPreview'}}>
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
    <div
    sx= {{
      variant: 'variants.postPreview.archiveImages'

    }}
    >
    <Img
      fluid={getFluidGatsbyImage(props.featuredImage,{ maxWidth: 800 }, {...clientConfig.sanity})} 
    />
    </div>
      <div
    sx={{
      variant: 'variants.postPreview.overlay',
      }}>
      <h4>{props.title}</h4>
      {props._rawExcerpt && (
        <div
        sx={{
          variant: 'variants.postPreview.excerpt',
          }}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
      </div>
    </Link>
    </div>
  )
}

export default BlogPostPreview