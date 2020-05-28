import { useStaticQuery, graphql } from "gatsby"
export const HeaderData = () => {
    const data = useStaticQuery(
        graphql`
          query SanityMetaData {
            allSanitySiteSettings(
              limit: 1
              sort: { fields: _updatedAt, order: DESC }
            ) {
              nodes {
                author
                description
                siteUrl
                title
                keywords
                seoImage {
                  asset {
                    url
                    metadata {
                      dimensions {
                        height
                        width
                      }
                    }
                  }
                }
                logo {
                  asset {
                    fluid(maxWidth: 512) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                
              }
            }
            allSanityMenuLink(sort: { fields: order, order: ASC }) {
              nodes {
                link
                name
                type
                subMenu {
                  link
                  name
                  type
                }
              }
            }
          }
        `
      )
      const siteMetadata = data.allSanitySiteSettings.nodes[0]
      const title = siteMetadata.title
      const logo = siteMetadata.logo.asset.fluid
      // const seoImageSrc = siteMetadata.seoImage.asset.url
      // const seoImageHeight = siteMetadata.seoImage.asset.metadata.dimensions.height
      // const seoImageWidth = siteMetadata.seoImage.asset.metadata.dimensions.width
      const menuLinks = data.allSanityMenuLink.nodes

    const placeholderMenuLinks = [
        {
            link: '#',
            name: 'Placeholder 2',
            subMenu: [
            {
                name: `Earth`,
                link: `/projects/earth`,
            },
            ], 
        },
        ]
    const sanityMenuLinks = [
        {
            link: '#',
            name: siteMetadata.title,
            subMenu: [
            {
                name: `Earth`,
                link: `/projects/earth`,
            },
            ], 
        },
        ]
    const allData = {
        placeholderMenuLinks,
        sanityMenuLinks,
        menuLinks,
        logo,
        title,
        }
    return allData
}

