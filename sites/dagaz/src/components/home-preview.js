/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { getServiceUrl } from '../lib/helpers'
import BlockText from './block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
const sanityConfig = {projectId: 'kw4k4btd', dataset: 'production'}

function servicePreview (props) {
  const image = props.featuredImage
  
  return (
    <div sx={{variant: 'variants.postPreview'}}>
    <div
    sx= {{
       variant: 'variants.postPreview.archiveImages'

    }}
    >
    <Link to={getServiceUrl(props.publishedAt, props.slug.current)}>
    {image && (<Img
      fluid={getFluidGatsbyImage(image,{ maxWidth: 800 }, sanityConfig)} 
    />)}
    </Link>
    </div>
      <div
        sx={{
          variant: 'variants.postPreview.overlay'
      }}>
      <h4>{props.title}</h4>
      {props._rawHomepageExcerpt && (
        <div 
        sx={{
          variant: 'variants.postPreview.description',
          }}
        >
          <BlockText blocks={props._rawHomepageExcerpt} />
        </div>
      )}

      <div
      sx = {{
      
        variant: 'variants.generalButton',
        marginTop: '40px'
      }}
      >
     <Link to={getServiceUrl(props.publishedAt, props.slug.current)}>{props.title} Information ></Link></div>
    </div>
    </div>
  )
}

export default servicePreview