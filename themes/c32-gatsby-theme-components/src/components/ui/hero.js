/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ titleText, buttonText, buttonLink }) => {
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
  return (
    <BackgroundImage
      fluid={heroBg}
      backgroundColor={`#040e18`}
      sx={{
        height: "65vh",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        mb: 5,
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <Styled.h1 
          sx= {{
            color: "accent",
            mb: 4,
          }}>{titleText}</Styled.h1>
        <Button as="a" href={buttonLink}
        sx= {{
          color: 'accent',
        }}
        >
          {buttonText}
        </Button>
      </div>
    </BackgroundImage>
  )
}

export default Hero
