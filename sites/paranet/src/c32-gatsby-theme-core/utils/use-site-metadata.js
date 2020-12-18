/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Logo from '../../../content/assets/maui-fishing.svg'
import LogoDark from '../../../content/assets/maui-fishing.svg'

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteData{
        
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
            }
            footerLinks {
              name
              link
            }
          }
        }
      }
    `
  )
  const [colorMode, setColorMode] = useColorMode()  
  const logo = (colorMode == 'light') ? Logo : LogoDark
  const useSanityRoutingNav = true
  const useTransitions = true
  const useDarkMode = true

  //Footer Information
  const developer = '3200.pro'
  const developerLink = 'https://3200.pro'
  const additionalLinks = [
    {
      name: 'Terms Of Use',
      url: '/terms'
    },
    {
      name: 'Privacy Policy',
      url: '/privacy-policy'
    },
  ]
  
  
  
  
  const title = '3200.Pro'
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterUsername = data.site.siteMetadata.social.twitter

  
  
  // Local Business Schema
  const allData = { ...metaData, useDarkMode, useSanityRoutingNav, additionalLinks, developer,developerLink, useTransitions, title, logo, seoImage, twitterUsername,
    
    // Local Business Data:
    hasLocalBusinessSchema: true,
    businessType: 'LocalBusiness',
    addressLocality:'Minneapolis',
    addressRegion: 'MN',
    postalCode: '55421',
    streetAddress: '3901 Foss Rd #1b',
    image: seoImage,
    name: '3200.Pro',
    telephone: '612-308-9461',
    priceRange: '$$',
    url: data.site.siteMetadata.url,
    bestRating: '5',
    ratingCount: '5',
    ratingValue: '5',
    latitude: '44.972870',
    longitude: '93.220468',
    geoRadius: '300',
  }
  return allData
  
}
