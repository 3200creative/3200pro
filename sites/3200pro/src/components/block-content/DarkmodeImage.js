/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
const sanityConfig = {projectId: 'p6aj32cv', dataset: 'production'}


function Figure (props) {
  const [colorMode] = useColorMode()  
  const GatsbyImageToggle = (colorMode == 'light') ? props.primaryImage.asset._ref : props.darkmodeImage.asset._ref
  const SanityImageToggle = (colorMode == 'light') ? props.primaryImage : props.darkmodeImage
  return (
    <figure  sx={{
      mx: 'auto',
      my: '80px',
    }}>
      {props.disableGatsbyImage !== true ? (
        <Img sx={{
          variant: 'variants.shadow',
          maxWidth: props.maxWidth ? props.maxWidth : '900px',
          margin: '0 auto',
          float: 'none',
          display: 'block',
        }}
        fluid={getFluidGatsbyImage(GatsbyImageToggle,{ maxWidth: 800 }, sanityConfig)}
        alt={props.alt}
        loading='lazy'
        />
      ):
      (
        <img
          src={imageUrlFor(buildImageObj(SanityImageToggle))
            .url()}
          alt={props.alt}
          sx={{
            variant: props.disableGatsbyImage != true ? 'variants.shadow' : null,
            maxWidth: '900px',
            margin: '0 auto',
            float: 'none',
            display: 'block',
            width: '100%'
          }}
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
