/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import SanityNav from "./navbar/sanitySubNav"
import HamburgerButton from "./navbar/hamburger-button"
import { NavContext } from "c32-gatsby-theme-core"
import DarkModeIcon from "c32-gatsby-theme-core/src/components/darkmode"
import { useSiteMetadata } from "c32-gatsby-theme-core"

const SubHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useDarkMode } = useSiteMetadata()
  const { useSanityNav } = useSiteMetadata()
  return (
    <section
      sx={{
        display: "grid",
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "fmBlue",
        gridArea: "header",
        marginTop: '60px',
        zIndex: "888", // Ensure the header is always on top
        variant: 'variants.subHeader',
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: ["auto 1fr", null, "auto", null, null],
          width: "100%",
          height: isNavOpen ? "100vh" : "auto",
          minHeight: "50px",
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
        }}
      >
        {useSanityNav ? (<SanityNav />) : (<Nav />)}
        <HamburgerButton />
        {useDarkMode == true && (<DarkModeIcon />) || null}
      </div>
    </section>
  )
}

export default SubHeader
