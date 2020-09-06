/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from 'gatsby'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Img from "gatsby-image"
import { Grid, Box } from 'theme-ui'

const SanityHero = ({ titleText, buttonText, buttonLink,buttonText2, buttonLink2, py, bg, bgc, ctaHeight, opacity, overlayRGBA, maxHeight, subTitleText, alt }) => {
  const heroBg = bg ? bg : 'none'
  const customOpacity = opacity;
  const customMaxHeight = maxHeight;
  return (
    <>
    <div sx= {{
          position: 'absolute',
          objectFit: 'cover',
          width: '100vw',
          left: "calc(-50vw + 50%)",
          top: 0,
          opacity: customOpacity ? customOpacity : '.3',
          overflow: 'hidden',
        }}><Img fluid={heroBg} 
        sx={{
          maxWidth: '100vw',
          marginTop: ['0', '0', '-10vw', '-20vw', '-20vw'],
          //minHeight: ctaHeight || ['70vh','40vh', null, null],
        }}
        alt={alt}
        />
    </div>
    
      <div
      sx={{
        px: 4,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        py: 4,
        mb: 5,
        display: ['block', null, "grid", null],
        minHeight: 'inherit',
        placeItems: "center",
        textAlign: 'center',
        variant:"variants.hero1"
        }}>
        <Styled.h1 
        sx={{
          color: "white",
          variant: 'variant:"variants.hero1.h1',
          }}>{titleText}</Styled.h1>
        <p sx={{
          marginBottom: 4,
          maxWidth: '90%',
          width: '700px'
        }}>{subTitleText}</p>
        <Grid
        gap={4}
        columns={[ 1, (buttonLink2 && 2) || 1, (buttonLink2 && 2) || 1]}
        sx={{
          variant: 'variants.ctaButtons'
        }}
        >
          {buttonLink && (<Box
          sx={{
            my: [0, null, 2] 
          }}
          ><Link to={buttonLink}>
          {buttonText} 
        </Link></Box>)}
        {buttonLink2 && (<Box
        sx={{
          my: [0, null, 2]  
        }}
        ><Link to={buttonLink2}>
          {buttonText2} 
        </Link></Box>)}
        </Grid>
      </div>
    </>
  )
}

export default SanityHero
