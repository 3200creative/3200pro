/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Logo from '../../../content/assets/placeholder.svg'
import LogoDark from '../../../content/assets/placeholder.svg'

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteData{
        
        seoImage: file(name: { eq: "placeholder" }) {
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
        sanityMenuLinks: sanityMenu(title: {eq: "Primary Menu"}) {
          title
          button {
            buttonTxt
            href
            subMenu {
              buttonTxt
              href
            }
          }
        }
        secondaryMenuLinks: sanityMenu(title: {eq: "Secondary Menu"}) {
          title
          button {
            buttonTxt
            href
            subMenu {
              buttonTxt
              href
            }
          }
        }
        footerMenuLinks: sanityMenu(title: {eq: "Footer Menu"}) {
          title
          button {
            buttonTxt
            href
            subMenu {
              buttonTxt
              href
            }
          }
        }
      }
    `
  )
  const [colorMode, setColorMode] = useColorMode()  
  const logo = (colorMode == 'light') ? Logo : LogoDark

  const useTransitions = true
  const useDarkMode = true
  const useSanityNav = true
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
    // Sanity Menu Information
    const navItems = data.sanityMenuLinks.button
    const secondaryNavItems = data.secondaryMenuLinks.button
    const footerNavItems = data.footerMenuLinks.button
  // Local Business Schema
  const allData = { ...metaData, navItems, secondaryNavItems, footerNavItems, useSanityNav, useDarkMode, additionalLinks, developer,developerLink, useTransitions, title, logo, seoImage, twitterUsername,
    
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
