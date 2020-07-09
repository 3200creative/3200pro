import { useStaticQuery, graphql } from "gatsby"
import Logo from '../../../content/assets/maple-grove-therapy.svg'
import seoImage from '../../../content/assets/dagaz-seo-site-icon.jpg'
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
        seoImage: file(name: { eq: "dagaz-seo-site-icon" }) {
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
  const useDarkMode = false
  const title = 'Dagaz Therapy'
  //const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterUsername = data.site.siteMetadata.social.twitter
  // Local Business Schema
  const allData = { ...metaData, title, useDarkMode, logo, seoImage, twitterUsername,
    
    // Local Business Data:
    hasLocalBusinessSchema: true,
    businessType: 'LocalBusiness',
    addressLocality:'Maple Grove',
    addressRegion: 'MN',
    postalCode: '55369',
    streetAddress: '11292 86th Ave N Suite 100',
    seoImage: seoImage,
    image: seoImage,
    name: 'Dagaz Therapy',
    telephone: '612-460-0427',
    priceRange: '$',
    url: data.site.siteMetadata.url,
    bestRating: '5',
    ratingCount: '5',
    ratingValue: '5',
    latitude: '45.111081',
    longitude: '-93.425827',
    geoRadius: '60',
  }
  return allData
  
}