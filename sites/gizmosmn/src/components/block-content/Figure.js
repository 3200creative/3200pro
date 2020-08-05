/** @jsx jsx */
import { jsx } from "theme-ui"
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
const sanityConfig = {projectId: 'yit7sywj', dataset: 'production'}
const Figure = (props, {node}) => {
  const fluidProps = getFluidGatsbyImage(props.asset._ref,{ maxWidth: 800 }, sanityConfig)
  return (
    <figure  sx={{
      width: '100%',
      mx: 'auto',
      my: '80px',
    }}>
      {props.asset && (
        <img sx={{
          variant: 'variants.shadow',
          maxWidth: '700px',
          margin: '0 auto',
          float: 'none',
          display: 'block',
        }}
        src={imageUrlFor(buildImageObj(props))
          .width(1200)
          .url()}
        alt={props.alt}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
