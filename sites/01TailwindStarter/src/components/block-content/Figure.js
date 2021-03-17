import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import clientConfig from '../../../client-config'

function Figure(props) {
  const data = props
  return (
    <figure>
      {(data.disableGatsbyImage && (
        <>
          <Img
            fluid={
              data.asset
                ? getFluidGatsbyImage(
                    data.asset._id,
                    { maxWidth: 800 },
                    clientConfig.sanity
                  )
                : null
            }
            alt={data.alt}
            loading="lazy"
          />
        </>
      )) || <img src={imageUrlFor(buildImageObj(data)).url()} alt={data.alt} />}
      <figcaption>{data.caption}</figcaption>
    </figure>
  )
}

export default Figure
