/** @jsx jsx */
import { jsx } from "theme-ui"
import { getFixedGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import clientConfig from "../../../client-config";


function Figure (props) {
  if (!props || !props.image.asset || !props.image.asset._id) { return null }
  return (
    <figure  sx={{
      mx: 'auto',
      my: '80px',
    }}>
      {props.disableGatsbyImage != true ? (
        <Img 
        fixed={getFixedGatsbyImage(props.image.asset._id,{ maxWidth: 800 }, clientConfig.sanity)}
        alt={props.alt}
        loading='lazy'
        style={{ display: 'block', margin: '0 auto' }}
        />
      ):
      (
        <img
          src={imageUrlFor(buildImageObj(props))
            .url()}
          alt={props.alt}
        />
      )
      }
      <figcaption
      sx={{
        margin: '10px auto',
        variant: 'variants.caption'
      }}
      >{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
