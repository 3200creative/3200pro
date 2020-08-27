/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from 'react';
import Modal from 'react-modal';
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import Masonry from 'react-masonry-component';
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
const sanityConfig = {projectId: 'ws0rvaun', dataset: 'production'}

function Gallery (props) {
  
  const [openModal, setOpen] = useState(false)
  const [currentImage, changeImage] = useState('cat')
  const columns = props.column
  const galleryLayout = props.gallerySize
  console.log('Read This:');
  console.log(galleryLayout);
  
  return (
    <div className='gallery'
      sx={{
        variant: `variants.${galleryLayout}`,
      }}
    >
    <Modal
      isOpen= {openModal}
      contentLabel="Example Modal"
      sx = {{
        paddingTop: 90,
        bg: 'rgba(0,0,0,.9)',
        display: 'grid',
        gridAutoColumns: '1fr 1fr 1fr',
        gridTemplateRows: 'auto',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: '9999999',
      }}
    >
      <button 
      onClick={() => {setOpen(false)}}
      onKeyDown={() => {setOpen(false)}}
      sx = {{
        right: 0,
        top: 90,
        marginTop: '40px',
        position: 'absolute',
      }}
      >
        X
      </button>
    <figure
    sx={{
        textAlign: 'center',
        width: '70vw',
        maxWidth: '500px',
        height: '100vh',
        overflow: 'hidden',
        margin: '40px auto 0 auto',

      }}>        
        <Img 
        onClick={() => {setOpen(false)}}
        onKeyDown={() => {setOpen(false)}}
        sx={{
            variant: 'variants.shadow',
            width: '70vw',
            maxWidth: '500px',
            margin: '40px auto 0 auto',
          }}
          fluid={ currentImage }
          loading='lazy'
          alt='lightbox'
          
          />
    </figure>
    </Modal>
    <Grid
    width={[ '100%' ]}
    gap={1}
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
      <figure>
        {image.asset && (
          <Img 
          
          onClick={() => {        
            changeImage(getFluidGatsbyImage(image.asset._ref,{ maxWidth: 800 }, sanityConfig));
            setOpen(true)
          }}
          onKeyDown={() => {        
            changeImage(getFluidGatsbyImage(image.asset._ref,{ maxWidth: 800 }, sanityConfig));
            setOpen(true)
          }}
          sx={{
            variant: 'variants.shadow',
            maxWidth: '100%',
          }}
          className={image.positioning +' '+ image.sizes}
          fluid={getFluidGatsbyImage(image.asset._ref,{ maxWidth: 800 }, sanityConfig)}
          alt={image.alt}
          loading='lazy'
          />
        )}
        <figcaption>{image.caption}</figcaption>
      </figure>
      </Box>
    ))}
    </Masonry>
    </Grid>
    </div>
    )
}

export default Gallery
