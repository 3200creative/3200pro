/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { getServiceUrl } from '../lib/helpers'
import BlockText from '../components/block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
const sanityConfig = {projectId: 'kw4k4btd', dataset: 'production'}

function servicePreview (props) {
  const image = props.featuredImage
  
  return (
    <div sx={{variant: 'variants.postPreview'}}>
    
    <Link to={getServiceUrl(props.publishedAt, props.slug.current)}>
    <div
    sx= {{
       variant: 'variants.postPreview.archiveImages'

    }}
    >
    {image && (<Img
      fluid={getFluidGatsbyImage(image,{ maxWidth: 800 }, sanityConfig)} 
    />)}
    </div>
      <div
        sx={{
          variant: 'variants.postPreview.overlay'
      }}>
      <h4>{props.title}</h4>
      {props._rawExcerpt && (
        <div 
        sx={{
          variant: 'variants.postPreview.description',
          }}
        >
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </div>
    </Link>
    </div>
  )
}

export default servicePreview