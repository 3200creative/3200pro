/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'

import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function Gallery (props) {
  return (
    <Grid 
    width={[ '100%', '40%' ]}
    gap={6}
    sx={{
    width: '85%'
    }}
    >
    {props.gallery.map(image => (
      <Box>
      <figure key={image.key} sx={{
        width: '100%'
      }}>
        {image.asset && (
          <img sx={{
            variant: 'variants.shadow',
            maxWidth: '100%',
          }}
          className={image.positioning +' '+ image.sizes}
          src={imageUrlFor(buildImageObj(image))
              .width(1200)
              .url()}
          alt={image.alt}
          />
        )}
        <figcaption>{image.caption}</figcaption>
      </figure>
      </Box>
    ))}
    </Grid>
  )
}

export default Gallery;
