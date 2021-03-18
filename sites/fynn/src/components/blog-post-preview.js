/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { getBlogUrl } from '../lib/helpers'
import BlockText from '../components/block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import BackgroundImage from "gatsby-background-image"
import clientConfig from "../../client-config";
import serializers from "./block-content/serializers";

function BlogPostPreview (props) {
  return (
    <div 
    columns={'1fr 2fr'}
    gap={5}
    sx={{
      justifyContent: "center",
      variant: 'variants.postPreview'
      }}>
    <div
    sx= {{
      variant: 'variants.postPreview.archiveImages',
    }}
    >
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
    <Img
      fixed={getFluidGatsbyImage(props.featuredImage,{ width: 420 }, {...clientConfig.sanity})}
      css = {{
        width: '100%',
      }}
      alt = {props.featuredImage.alt}
    />
    </Link>
    </div>
      <div
    sx={{
      px: [2],
      variant: 'variants.postPreview.overlay',
      }}>
        <Link to={getBlogUrl(props.publishedAt, props.slug.current)}> 
      <h2>{props.title}</h2>
      {props._rawExcerpt && (
        <span>
          <BlockText blocks={props._rawExcerpt} serializers={serializers} {...clientConfig.sanity}/>
        </span>
      )}
      </Link>
      </div>
    </div>
  )
}

export default BlogPostPreview
