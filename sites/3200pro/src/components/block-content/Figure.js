/** @jsx jsx */
import { jsx } from 'theme-ui'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const sanityConfig = { projectId: 'p6aj32cv', dataset: 'production' }

function Figure({
  props,
  disableGatsbyImage,
  parentProps,
  variant,
  disableStyling,
  ...rest
}) {
  const data = parentProps || rest
  return (
    <figure
      sx={
        disableStyling !== 'true'
          ? {
              mx: 'auto',
              my: '80px',
            }
          : {}
      }
    >
      {data.disableGatsbyImage !== 'false' ? (
        <Img
          sx={
            disableStyling !== 'true'
              ? {
                  variant: variant || 'variants.shadow',
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
                  sanityConfig
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
            disableStyling != 'true'
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
