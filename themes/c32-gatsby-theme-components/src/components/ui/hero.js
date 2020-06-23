/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Grid, Box } from 'theme-ui'

const Hero = ({ titleText, buttonText, buttonLink, buttonText2, buttonLink2, bg, ctaHeight, overlayRGBA }) => {
  const data = useStaticQuery(
    graphql`
      query Hero {
        heroImage: file(relativePath: { eq: "ui/hero-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const heroBg = data.heroImage.childImageSharp.fluid
  const rgba = overlayRGBA
  return (
    <>
    <BackgroundImage
      fluid={bg || heroBg}
      backgroundColor={`#040e18`}
      sx={{
        height: ctaHeight || "65vh",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        mb: 5,
        display: "grid",
        placeItems: "center",
        backgroundColor: rgba,
        variant:"variants.hero1", 
      }}
    >
      <div
        sx= {{
          textAlign: 'center',
          display: "grid",
        placeItems: "center",
          backgroundColor: rgba,
          width: '100vw',
          minHeight: '250px',
        }}
      >
        <Styled.h1 
          sx= {{
            color: "accent",
            variant:"variants.hero1.h1", 
          }}>{titleText}</Styled.h1>
        <Grid
        gap={2}
        columns={[ 1, 2, 2]}
        sx={{
          variant: 'variants.ctaButtons'
        }}
        >
          {buttonLink && (<Box 
          sx={{
            my: 4 
          }}><Link to={buttonLink}>
          {buttonText} 
        </Link></Box>)}
        {buttonLink2 && (<Box
        sx={{
          my: 4
        }}
        ><Link to={buttonLink2} >
          {buttonText2} 
        </Link></Box>)}
        </Grid>
      </div>
    </BackgroundImage>
    </>
  )
}

export default Hero
