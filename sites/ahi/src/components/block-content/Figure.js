/** @jsx jsx */
import { jsx } from "theme-ui"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
const sanityConfig = {projectId: 'ws0rvaun', dataset: 'production'}

function Figure (props) {
  return (
    <figure  sx={{
      width: 'max-content',
      mx: 'auto',
      my: '80px',
    }}>
      {props.asset && (
        <Img sx={{
          variant: 'variants.shadow',
          maxWidth: '700px',
          margin: '0 auto',
          float: 'none',
          display: 'block',
        }}
        fluid={getFluidGatsbyImage(props.asset._ref,{ maxWidth: 800 }, sanityConfig)}
        alt={props.alt}
        loading='lazy'
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
