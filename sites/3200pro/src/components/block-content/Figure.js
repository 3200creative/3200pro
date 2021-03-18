/** @jsx jsx */
import { jsx } from 'theme-ui'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import clientConfig from '../../../client-config'

function Figure(props) {
  const data = props
  return (
    <figure
      sx={
        data.disableStyling !== true
          ? {
              mx: 'auto',
              my: '80px',
            }
          : {}
      }
    >
      {data.disableGatsbyImage !== true ? (
        <Img
          sx={
            data.disableStyling !== true
              ? {
                  variant: 'variants.shadow',
                  maxWidth: '900px',
                  margin: '0 auto',
                  float: 'none',
                  display: 'block',
                }
              : {}
          }
          fluid={
            data.asset
              ? getFluidGatsbyImage(
                  data.asset._ref,
                  { maxWidth: 800 },
                  clientConfig.sanity
                )
              : null
          }
          alt={data.alt}
          loading="lazy"
        />
      ) : (
        <img
          src={imageUrlFor(buildImageObj(data)).url()}
          alt={data.alt}
          sx={
            data.disableStyling !== true
              ? {
                  variant: 'variants.shadow',
                  maxWidth: '900px',
                  margin: '0 auto',
                  float: 'none',
                  display: 'block',
                  width: '100%',
                }
              : {}
          }
        />
      )}
      <figcaption
        sx={{
          margin: '10px auto',
          variant: 'variants.caption',
        }}
      >
        {data.caption}
      </figcaption>
    </figure>
  )
}

export default Figure
