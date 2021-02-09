import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { NavContext, useSiteMetadata } from 'c32-gatsby-theme-core'

const SanityNav = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { secondaryNavItems } = useSiteMetadata()
  return (
    <nav role="navigation" aria-label="main-navigation">
      <ul>
        {secondaryNavItems.map((link) => (
          <li key={link.buttonTxt}>
            <Link
              to={link.href}
              activeClassName="active"
              onClick={() => setIsNavOpen(false)}
              aria-haspopup={link.subMenu != null}
            >
              {link.buttonTxt} {link.subMenu && link.subMenu.length > 0}
            </Link>
            {link.subMenu && link.subMenu.length > 0 ? (
              <ul aria-label="dropdown">
                {link.subMenu.map((subLink) => (
                  <li key={link.buttonTxt}>
                    <Link
                      to={subLink.href}
                      activeClassName="active"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {subLink.buttonTxt}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SanityNav
