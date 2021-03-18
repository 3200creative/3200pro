/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function ImageCardBlock (props) {
    

  return (
    <>
    <Grid
    width={[ '100%', '30%' ]}
    gap={3}
    columns={[ 1, 3]}
    sx={{
      marginTop: '40px'
    }}
    >
    {props.imageCards.map(card => (
    <Link to={card.href}
      sx= {{
        textDecoration: 'none',
        color: 'black',
        fontWeight: '400',
        textTransform: 'uppercase',
      }}
    >
    <Box
    sx={{
      overflow: 'hidden'
    }}
    >
    <img sx={{
            variant: 'variants.shadow',
            height: '200px',
          }}
          src={imageUrlFor(buildImageObj(card.blockImage)).width(400).url()}
          alt={card.blockImage.alt ? card.blockImage.alt : 'Minnesota Custom Car Shop'}
          />
    <h4
     sx={{
      padding: '0px',
      textAlign: 'center',
      marginTop: '1',
      paddingTop: '1',
      textDecoration: 'none',
      color: 'black',
      fontWeight: '400',
      textTransform: 'uppercase',
      borderTop: '1px solid #999',
      width: 'max-content',
      mx: 'auto'
    }}
    >{card.title}</h4>
    </Box>
    </Link>
    ))}
    </Grid>
    </>
  )
}

export default ImageCardBlock
