/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
export const FooterData = () => {
    const data = useStaticQuery(
        graphql`
          query SanityFooterQuery {
            footer: sanityFooter{
              id
              footerSection {
                title
                _rawText
                menu {
                  button {
                    buttonTxt
                    icon
                    href
                  }
                  title
                }
              }
            }
          }
        `
      )
      const sectionTitle = 'Section Title'
      // const seoImageSrc = siteMetadata.seoImage.asset.url
      // const seoImageHeight = siteMetadata.seoImage.asset.metadata.dimensions.height
      // const seoImageWidth = siteMetadata.seoImage.asset.metadata.dimensions.width
      const footer = data.footer
    const allData = {
      sectionTitle,
      footer
      }
    return allData
}

