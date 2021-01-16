/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "c32-gatsby-theme-core"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import CTALink from "./CTALink";

const SanityRoutingNav = ({navMenuItems, isContactMenu, variant}) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const  navItems  = navMenuItems
  const contactMenu = isContactMenu
  const { lockMobileMenu } = useSiteMetadata()
  // There are two setups for Nav. One that that lock mobile, and one that toggles from header menu to desktop.
  return (
    <>
    { lockMobileMenu && contactMenu !== true ?
    <nav
      sx={{
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: isNavOpen ? "flex" : "none",
        flexDirection: ["column", null, "row", null, null],
        variant: `variants.${variant && variant || 'nav'}`
        // to customize make a child element of the header in theme.js
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      {(navItems || []).map((c, i) => (
          <CTALink key={`cta_${i}`} {...c} />
      ))}
    </nav>
    :
    <nav
      sx={{
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        flexDirection: ["column", null, "row", null, null],
        variant: `variants.${variant && variant || 'nav'}`
        // to customize make a child element of the header in theme.js
      }}
      role="navigation"
      aria-label="main-navigation"
    >

      {(navItems || []).map((c, i) => (
        <div sx={{variant: 'variants.nav.item'}}>
          <CTALink key={`cta_${i}`} {...c} />
        </div>
      ))}
    </nav>
    
    }
    </>
  )
}

export default SanityRoutingNav
