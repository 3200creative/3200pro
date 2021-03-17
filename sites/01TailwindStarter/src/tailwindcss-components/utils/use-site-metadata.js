import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteData {
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
        sanityGlobalOptions {
          globalNavMenu {
            ...navMenu
          }
          globalContactMenu {
            ...navMenu
          }
        }
        sanitySiteSettings {
          _id
          logo {
            asset {
              url
            }
          }
          logoDark {
            asset {
              url
            }
            alt
          }
        }
      }
    `
  )
  const Logo =
    data.sanitySiteSettings.logo.asset.url &&
    data.sanitySiteSettings.logo.asset.url
  const LogoDark =
    data.sanitySiteSettings.logoDark.asset.url &&
    data.sanitySiteSettings.logoDark.asset.url
  const logo = Logo
  const logoReversed = LogoDark
  const globalNavMenu =
    data.sanityGlobalOptions.globalNavMenu.items &&
    data.sanityGlobalOptions.globalNavMenu.items
  const globalContactMenu =
    data.sanityGlobalOptions.globalContactMenu.items &&
    data.sanityGlobalOptions.globalContactMenu.items
  const lockMobileMenu = true
  const headerDisplayType = 'block'
  const developer = '3200.pro'
  const developerLink = 'https://3200.pro'
  const additionalLinks = [
    {
      name: 'Terms Of Use',
      url: '/terms',
    },
    {
      name: 'Privacy Policy',
      url: '/privacy-policy',
    },
  ]

  const title = '3200.Pro'
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterUsername = data.site.siteMetadata.social.twitter
  const HamburgerTxt = 'Menu'

  // Local Business Schema
  const allData = {
    ...metaData,
    logoReversed,
    globalNavMenu,
    globalContactMenu,
    HamburgerTxt,
    headerDisplayType,
    lockMobileMenu,
    additionalLinks,
    developer,
    developerLink,
    title,
    logo,
    seoImage,
    twitterUsername,

    // Local Business Data:
    hasLocalBusinessSchema: true,
    businessType: 'LocalBusiness',
    addressLocality: 'Minneapolis',
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
