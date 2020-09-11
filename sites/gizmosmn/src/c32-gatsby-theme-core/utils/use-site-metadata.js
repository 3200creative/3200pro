import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteData{
        # logo: file(name: { eq: "minnesota-affordable-home-improvement-company.svg" }) {
        #   childImageSharp {
        #     fluid(maxHeight: 512) {
        #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
        #     }
        #   }
        # }
        seoImage: file(name: { eq: "c32-site-social" }) {
          childImageSharp {
            resize(width: 1024) {
              src
              width
              height
            }
          }
        }
        logo: sanityCompanyInformation {
          logo {
            asset {
              url
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

  const logo = data.logo.logo.asset.url
  const title = 'Gizmos Custom Car Shop | 19187 Main St NW, Cedar, MN 55011'
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterUsername = data.site.siteMetadata.social.twitter
  const developerLink = 'https://localizedpro.com'
  const developer = 'Localized Pro'
  // Local Business Schema
  const allData = { ...metaData, title,developer,developerLink, logo, seoImage, twitterUsername,
    
    // Local Business Data:
    hasLocalBusinessSchema: true,
    businessType: 'AutoRepair',
    addressLocality:'Cedar',
    addressRegion: 'MN',
    postalCode: '55011',
    streetAddress: '19187 Main ST NW',
    image: seoImage,
    name: 'Gizmos Custom Cars',
    telephone: '612-845-2515',
    priceRange: '$$$',
    url: data.site.siteMetadata.url,
    bestRating: '5',
    ratingCount: '5',
    ratingValue: '5',
    latitude: '45.317860',
    longitude: '-93.2869621',
    geoRadius: '300',
  }
  return allData
  
}
