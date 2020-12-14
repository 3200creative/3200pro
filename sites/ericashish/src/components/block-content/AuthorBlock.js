/** @jsx jsx */
import { jsx } from "theme-ui"
import BlockContent from '../block-content'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { React } from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

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
    <div container
    sx= {{
      maxWidth: '100%',
      width: '900px !important',
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'start',
      variant: 'variants.smallAuthorBlock'
    }}
    >
    <div sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '46px', marginRight: '10px', }}>
    <figure
    sx = {{
      float: 'left',
      display: 'block',
      clear: 'none',
      margin: 0,
      border: '1px solid #aaa',
      padding: '2px',
      borderRadius: '50%',
      height: '46px',
      width: '46px',
      overflow: 'hidden',
    }}
    >   
        <img
          src={imageUrlFor(buildImageObj(props.author.image))
            .width(40)
            .height(40)
            .fit('crop')
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
    </div>
    <div
    sx = {{
      float: 'left',
      width: '550px',
      display: 'block',
      clear: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '14px',
      lineHeight: '1.45',
      color: 'var(--theme-ui-colors-grey,#73737D)'
    }}>
    <Typography wrap>
    <BlockContent blocks={ authorBio || [] } />
    </Typography>
    </div>
    </div>
  )
}

export default AuthorBlock
