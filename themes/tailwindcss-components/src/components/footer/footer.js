import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'c32-gatsby-theme-core'

const SiteFooter = ({ footerBG }) => {
  const { title } = useSiteMetadata()
  const { developer } = useSiteMetadata()
  const { developerLink } = useSiteMetadata()
  const { additionalLinks } = useSiteMetadata()
  const { footerNavItems } = useSiteMetadata()
  const { footerMessage } = useSiteMetadata()
  const bg = footerBG
  return (
    <footer>
      <div>
        <p>
          © {new Date().getFullYear()} {title} | Site Design:{' '}
          <a href={developerLink}> {developer || 'Localized Pro'}</a>
        </p>
        <ul>
          {footerNavItems
            ? footerNavItems.map((footerNavItems) => (
                <li>
                  <Link to={footerNavItems.href}>
                    {footerNavItems.buttonTxt}
                  </Link>
                </li>
              ))
            : null}
          {footerNavItems ? ',' : null}
          {additionalLinks
            ? additionalLinks.map((addtionalLink) => (
                <li>
                  <Link to={addtionalLink.url}>{addtionalLink.name}</Link>
                </li>
              ))
            : null}
        </ul>
      </div>
      {footerMessage && <div>{footerMessage}</div>}
    </footer>
  )
}

export default SiteFooter
