/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ titleText, buttonText, buttonLink, bg, ctaHeight, overlayRGBA }) => {
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
          py: 4,
          display: "grid",
        placeItems: "center",
          backgroundColor: rgba,
          width: '100vw',
          height: '100%',
        }}
      >
        <Styled.h1 
          sx= {{
            color: "accent",
            variant:"variants.hero1.h1", 
          }}>{titleText}</Styled.h1>
        <Button as="a" href={buttonLink}
        sx= {{
          color: 'accent',
          variant:"variants.hero1.h1.a",
        }}
        >
          {buttonText}
        </Button>
      </div>
    </BackgroundImage>
    </>
  )
}

export default Hero
