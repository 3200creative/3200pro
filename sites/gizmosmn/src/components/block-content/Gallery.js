/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import './gallery.css'
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
const customStyles = {
  overlay: {zIndex: 1000},
  backgroundColor: 'rgba(0,0,0,.5)',
};


function Gallery (props) {
  Modal.setAppElement(`#___gatsby`);
  const [openModal, setOpen] = useState(false)
  const [currentImage, changeImage] = useState('cat')
  const columns = props.column
  return (
    <>
    <Modal style={customStyles}
      isOpen= {openModal}
      contentLabel="Example Modal"
      closeTimeoutMS = {1000}
      onClick={() => {
        setOpen(false)
      }}
      sx = {{
        
        position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "100%",
    margin: "32px auto",
    height: '100vh',
    width: '100%',
    padding: 0,
    border: 0,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
      }}
    >
      <button onClick={() => {setOpen(false)}}
      sx = {{
        right: '10px',
        padding: '20px',
        color: 'white',
        backgroundColor: 'black',
        bottom: '10px',
        border: 'none',
        borderRadius: '4px',
        position: 'fixed',
        boxShadow: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.5) !important',
      }}
      >
        Close
      </button>
    <figure
    onClick={() => {
      setOpen(false)
    }}
    sx={{
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100%',
        textAlign: 'center',
        

      }}>
        <img sx={{
            variant: 'variants.shadow',
            maxWidth: '100%',
            marginTop: '5vh',
            maxHeight: '80vh',
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.5) !important',
          }}
          src={ currentImage }
          alt='Minnesota Custom Cars'
          />       
    </figure>
    </Modal>
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
      sx={{
        margin: ['20px', '40px'],
        variant: 'variants.globalFigure'
      }}
      onClick={() => { 
        changeImage(imageUrlFor(buildPageImageObj(image))
        .width(1200)
        .auto('format')
        .url())
        setOpen(true)
      }}
      >
        {image.asset && (
          <img sx={{
            variant: 'variants.shadow',
            maxWidth: '100%',
           minHeight: [null ,columns === '33%' ? '180px' : '260px'],
          }}
          src={imageUrlFor(buildPageImageObj(image))
            .width(1200)
            .auto('format')
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
    </>
    )
}

export default Gallery
