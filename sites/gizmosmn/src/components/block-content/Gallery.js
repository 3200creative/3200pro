/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import Masonry from 'react-masonry-component';
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import { buildPageImageObj } from '../../../src/lib/helpers'
const sanityConfig = {projectId: 'yit7sywj', dataset: 'production'}

function Gallery (props) {
  
  const [openModal, setOpen] = useState(false)
  const [currentImage, changeImage] = useState('cat')
  const columns = props.column
  return (
    <>
    {/* <Modal
      isOpen= {openModal}
      contentLabel="Example Modal"
      sx = {{
        paddingTop: 90,
        bg: 'rgba(0,0,0,.9)',
        display: 'grid',
        gridAutoColumns: '1fr 1fr 1fr',
        gridTemplateRows: 'auto',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: '9999999',
      }}
    >
      <button onClick={() => {setOpen(false)}}
      sx = {{
        right: 0,
        top: 90,
        position: 'absolute',
      }}
      >
        X
      </button>
    <figure
    onClick={() => {
      setOpen(false)
    }}
    sx={{
        width: '90vw',
        maxHeight: '100vh',
        textAlign: 'center',
        

      }}>        
        <Img sx={{
            variant: 'variants.shadow',
            maxWidth: '100%',
            marginTop: '5vh',
            maxHeight: '80vh',
          }}
          fluid={ currentImage }
          alt='lightbox'
          />
    </figure>
    </Modal> */}
    <Grid
    sx={{
    width: '100%'
    }}
    >
  <Masonry
    className={'my-gallery-class'} // default ''
    elementType={'div'} // default 'div'
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
  >
    {props.gallery.map(image => (

      <Box key={image.key}
      sx={{
        width: ['100%','100%', columns],
        
      }}
      >
      <figure
      onClick={() => {        
        changeImage(getFluidGatsbyImage(image,{ maxWidth: 800 }, sanityConfig));
        setOpen(true)
      }}
      >
        {image.asset && (
          <img sx={{
            variant: 'variants.shadow',
            maxWidth: '100%',
            minHeight: columns === '33%' ? '180px' : '260px'
          }}
          src={imageUrlFor(buildPageImageObj(image))
            .width(1200)
            .url()
            
          }
          // fluid={getFluidGatsbyImage(image.asset._ref,{ maxWidth: 800 }, sanityConfig)}
          alt={image.alt}
          />
        )}
        <figcaption>{image.caption}</figcaption>
      </figure>
      </Box>
    ))}
    </Masonry>
    </Grid>
    </>
    )
}

export default Gallery
