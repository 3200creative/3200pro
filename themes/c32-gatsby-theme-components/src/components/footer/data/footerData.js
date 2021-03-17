/** @jsx jsx */
export const SanityFooterData = () => {
    // const data = useStaticQuery(
    //     graphql`
    //       query SanityFooterQuery {
    //         footer: allSanityFooter {
    //           edges {
    //             node {
    //               footerSections {
    //                 title
    //                 text {
    //                   _rawChildren
    //                 }
    //                 menu {
    //                   title
    //                   button {
    //                     buttonTxt
    //                     href
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }

    //         colors: sanityGlobalOptions {
    //           teaColor {
    //             hex
    //           }
    //           musicColor {
    //             hex
    //           }
    //           lifeColor {
    //             hex
    //           }
    //           businessColor {
    //             hex
    //           }
    //         }
    //       }
    //     `
    //   )
      // const [colorMode, setColorMode] = useColorMode()  

      // const sectionTitle = 'Section Title'
      // // const seoImageSrc = siteMetadata.seoImage.asset.url
      // // const seoImageHeight = siteMetadata.seoImage.asset.metadata.dimensions.height
      // // const seoImageWidth = siteMetadata.seoImage.asset.metadata.dimensions.width
      // const footerSections = data.allSanityFooter.nodes

    const allData = {
      sectionTitle,
      footerSections
        }
    return allData
}

