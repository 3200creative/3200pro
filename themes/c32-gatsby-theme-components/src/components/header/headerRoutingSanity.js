/** @jsx jsx */
import { NavContext, useSiteMetadata } from "c32-gatsby-theme-core"
import DarkModeIcon from "c32-gatsby-theme-core/src/components/darkmode"
import { useContext } from "react"
import { jsx } from "theme-ui"
import Branding from "./branding/sanity/branding"
import HamburgerButton from "./navbar/hamburger-button"
import Nav from "./navbar/nav"
import SanityRoutingNav from "./navbar/sanityRoutingNav"

const SiteHeader = ({navMenuItems, contactMenuItems}) => {
  const [isNavOpen] = useContext(NavContext)
  const { useSanityRoutingNav, useSanityRoutingContactNav, useDarkMode} = useSiteMetadata()
  const { headerDisplayType } = useSiteMetadata()
  return (
    <header
      sx={{
        display: "grid",
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        gridArea: "header",
        zIndex: "888", // Ensure the header is always on top
        variant: 'variants.header',
      }}
      id="header"
    >
      <div sx={{variant: 'variants.contactNav'}}>{useSanityRoutingContactNav ? (<div sx={{variant: 'contactNav'}}><SanityRoutingNav navMenuItems={contactMenuItems} isContactMenu='true' /></div>) : undefined}</div>
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          display: headerDisplayType ? headerDisplayType : "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: ["auto 1fr", null, "auto", null, null],
          width: "100%",
          height: (isNavOpen && headerDisplayType) ? "auto" : isNavOpen ? "100vh" : "auto",
          minHeight: "50px",
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
          variant: 'variants.header.wrapper',
        }}
      >
        <Branding />
        {useSanityRoutingNav ? (<SanityRoutingNav navMenuItems={navMenuItems} />) : (<Nav />)}
        
        <HamburgerButton />
        {useDarkMode == true && (<DarkModeIcon />) || null}
      </div>
    </header>
  )
}

export default SiteHeader
