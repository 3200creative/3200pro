/** @jsx jsx */
import { jsx } from "theme-ui"
import BlockContent from '../block-content'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { React } from "react"
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'

function AuthorBlock (props) {
  let authorBio
  switch(props.authorBlockBio) {
    case 'teaBio': 
    authorBio = props.author.teaBio
    break
    case 'musicBio':
    authorBio = props.author.musicBio
    break
    case 'businessBio': 
    authorBio = props.author.businessBio
    break
    case 'lifeBio': 
    authorBio = props.author.lifeBio
    break
    default:
      authorBio = props.author.bio;
  }
  return (
    <Grid
    columns={['1fr 8fr']}
    sx= {{
      maxWidth: '100%',
      width: '500px',
      fontSize: '12px',
      variant: 'variants.smallAuthorBlock'
    }}
    >
    <Box>
    <figure
    sx = {{
      margin: 0,
      border: '1px solid #aaa',
      padding: '2px',
      borderRadius: '50%',
      height: '46px',
      width: '46px',
    }}
    >   
        <img
          src={imageUrlFor(buildImageObj(props.author.image))
            .width(100)
            .url()}
          alt={props.author.name}
          sx= {{
            display: 'block',
            position: 'relative',
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.25)',
            overflow: 'hidden'
            
            }}
        />
    </figure>
    </Box>
    <Box
    sx = {{
      fontSize: '14px',
      lineHeight: '1.45',
      color: 'var(--theme-ui-colors-grey,#73737D)'
    }}>
    <BlockContent blocks={ authorBio || [] } />
    </Box>
    </Grid>
  )
}

export default AuthorBlock
