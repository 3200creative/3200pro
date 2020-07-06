/** @jsx jsx */
import { jsx } from "theme-ui"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
const sanityConfig = {projectId: 'p6aj32cv', dataset: 'production'}

function Figure (props) {
  return (
    <figure  sx={{
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
      <figcaption
      sx={{
        maxWidth: '700px',
        margin: '0 auto',
        variant: 'variants.caption'
      }}
      >{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
