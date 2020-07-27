/** @jsx jsx */
import { jsx } from "theme-ui"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
const sanityConfig = {projectId: 'kw4k4btd', dataset: 'production'}

function Figure (props) {
  return (
    <figure  sx={{
      mx: 'auto',
      my: '80px',
    }}>
      {props.asset && (
        <Img sx={{
          variant: 'variants.shadow',
          maxWidth: '100%',
          width: props.sizes,
          mx: 4,
          marginLeft: props.positioning == 'left' && '0px' || null,
          marginRight: props.positioning == 'right' && '0px' || null,
          float: props.positioning,
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
