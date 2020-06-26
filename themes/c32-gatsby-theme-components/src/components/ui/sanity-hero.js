/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Link } from 'gatsby'
//import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Grid, Box } from 'theme-ui'

const SanityHero = ({ titleText, buttonText, buttonLink,buttonText2, buttonLink2, py, bg, bgc, ctaHeight, overlayRGBA }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query sanityHero {
  //       heroImage: file(relativePath: { eq: "ui/hero-bg.jpg" }) {
  //         childImageSharp {
  //           fluid(quality: 80, maxWidth: 1920) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  const heroBg = bg ? bg : 'none'
  const rgba = overlayRGBA
  return (
    <BackgroundImage
      fluid={heroBg}
      backgroundColor= {bgc}
      sx={{
        minHeight: ctaHeight || ['70vh','40vh'],
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        variant:"variants.hero1"
      }}
    > 
      <div
      sx={{
        px: 4,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        pt: 4,
        mb: 5,
        display: "grid",
        minHeight: '250px',
        placeItems: "center",
        backgroundColor: rgba,
        textAlign: 'center'
        }}>
        <Styled.h1 
        sx={{
          color: "white",
          variant: 'variants.whiteTextShadow',
          marginBottom: 4,
          }}>{titleText}</Styled.h1>
        <Grid
        gap={4}
        columns={[ 1, buttonLink2 && 2 || 1, buttonLink2 && 2 || 1]}
        sx={{
          variant: 'variants.ctaButtons'
        }}
        >
          {buttonLink && (<Box
          sx={{
            my: [0, null, 4] 
          }}
          ><Link to={buttonLink}>
          {buttonText} 
        </Link></Box>)}
        {buttonLink2 && (<Box
        sx={{
          my: [0, null, 4]  
        }}
        ><Link to={buttonLink2}>
          {buttonText2} 
        </Link></Box>)}
        </Grid>
      </div>
    </BackgroundImage>
  )
}

export default SanityHero
