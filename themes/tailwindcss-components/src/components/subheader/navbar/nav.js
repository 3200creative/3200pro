import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { NavContext, useSiteMetadata } from 'c32-gatsby-theme-core'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { secondaryNavItems } = useSiteMetadata()
  return (
    <nav role="navigation" aria-label="main-navigation">
      <ul>
        {secondaryNavItems.map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              activeClassName="active"
              onClick={() => setIsNavOpen(false)}
              aria-haspopup={link.subMenu != null}
            >
              {link.name} {link.subMenu && link.subMenu.length > 0}
            </Link>
            {link.subMenu && link.subMenu.length > 0 ? (
              <ul aria-label="dropdown">
                {link.subMenu.map((subLink) => (
                  <li key={link.name}>
                    <Link
                      to={subLink.link}
                      activeClassName="active"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {subLink.name}
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

export default Nav
