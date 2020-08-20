/* eslint no-unused-vars:0 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { getBoatUrl } from '../lib/helpers'
import BlockText from './block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from '../../client-config'
import Grid from '@material-ui/core/Grid';

function BoatPreview (props) {
  const image = props.featuredImage
  
  return (
    <Grid item xs={10} md={5}>
    
    <Link to={getBoatUrl(props.slug.current)}>
    <div
    sx= {{
       variant: 'variants.postPreview.archiveImages'

    }}
    >
    {image && (<Img
      fluid={getFluidGatsbyImage(image,{ maxWidth: 800 }, {...clientConfig.sanity})} 
    />)}
    </div>
      <div
    sx={{
      variant: 'variants.postPreview.overlay',
      }}>
      <h4>{props.title}</h4>
      {props._rawExcerpt && (
          <BlockText blocks={props._rawExcerpt} />
      )}
      </div>
    </Link>
    </Grid>
  )
}

export default BoatPreview