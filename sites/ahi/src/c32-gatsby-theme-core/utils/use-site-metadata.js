import { useStaticQuery, graphql } from "gatsby"
import Logo from '../../../content/assets/minnesota-affordable-home-improvement-company.svg'
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

  const logo = Logo
  const title = 'Affordable Home Improvementz'
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterUsername = data.site.siteMetadata.social.twitter
  // Local Business Schema
  const allData = { ...metaData, title, logo, seoImage, twitterUsername,
    
    // Local Business Data:
    hasLocalBusinessSchema: true,
    businessType: 'LocalBusiness',
    addressLocality:'St. Anthony',
    addressRegion: 'MN',
    postalCode: '55421',
    streetAddress: '3901 Foss Rd #1b',
    image: seoImage,
    name: 'Affordable Home Improvementz',
    telephone: '612-500-8717',
    priceRange: '$',
    url: data.site.siteMetadata.url,
    bestRating: '5',
    ratingCount: '5',
    ratingValue: '5',
    latitude: '45.0392447',
    longitude: '-93.2135254',
    geoRadius: '300',
  }
  return allData
  
}
