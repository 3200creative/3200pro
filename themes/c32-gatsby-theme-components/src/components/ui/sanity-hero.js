/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
//import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const SanityHero = ({ titleText, buttonText, buttonLink, bg, overlayRGBA }) => {
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
  const heroBg = bg
  const rgba = overlayRGBA
  return (
    <BackgroundImage
      fluid={heroBg}
      backgroundColor={`#000`}
      sx={{
        height: "50vh",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    > 
      <div
      sx={{
        px: 4,
        height: "40vh",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        mb: 5,
        py: 5,
        display: "grid",
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
        <Button as="a" href={buttonLink}>
          {buttonText}
        </Button>
      </div>
    </BackgroundImage>
  )
}

export default SanityHero
