/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteData {
        logo: file(relativePath: { eq: "base-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seoImage: file(name: { eq: "c32-site-social" }) {
          childImageSharp {
            resize(width: 1024) {
              src
              width
              height
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            social {
              twitter
            }
            menuLinks {
              name
              link
              subMenu {
                name
                link
              }
            }
          }
        }
      }
    `
  )
  const [colorMode, setColorMode] = useColorMode() 
  const useTransitions = true
  const useDarkMode = true
  const siteURL = data.site.siteMetadata.siteUrl
  const logo = data.logo.childImageSharp.fluid
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterUsername = data.site.siteMetadata.social.twitter
  const developer = '3200.PRO'
  const developerLink = 'https://3200.pro'
  const allData = { ...metaData,siteURL, logo,developerLink, developer, seoImage, twitterUsername, useDarkMode, useTransitions }
  return allData
  
}
