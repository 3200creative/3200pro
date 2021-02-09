import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const sanityConfig = { projectId: '12345', dataset: 'production' }

function Figure(props) {
  return (
    <figure>
      {props.disableGatsbyImage != true ? (
        <Img
          fluid={getFluidGatsbyImage(props.asset._ref, sanityConfig)}
          alt={props.alt}
          loading="lazy"
        />
      ) : (
        <img src={imageUrlFor(buildImageObj(props)).url()} alt={props.alt} />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
