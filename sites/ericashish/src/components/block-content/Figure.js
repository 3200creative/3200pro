/** @jsx jsx */
import { jsx } from "theme-ui"
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function Figure (props) {
  return (
    <figure  sx={{
      width: 'max-content',
      mx: 'auto',
      my: '80px',
    }}>
      {props.asset && (
        <img sx={{
          maxWidth: '700px',
          margin: '0 auto',
          float: 'none',
          display: 'block',
        }}
        className={props.positioning +' '+ props.sizes}
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
