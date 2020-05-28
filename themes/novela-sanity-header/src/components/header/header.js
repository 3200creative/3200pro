/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import HamburgerButton from "./navbar/hamburger-button"
import { NavContext } from "c32-gatsby-theme-core"


const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  return (
    <header
      sx={{
        display: "grid",
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        paddingTop: '50px',
        gridArea: "header",
        mb: [0,1,100],
        zIndex: "888", // Ensure the header is always on top
      }}
      id="header"
    >
      <div sx={{ color: 'blue', paddingLeft: 3 }}>
      </div>
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
          maxWidth: '1220px',
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
        }}
      >
        <Branding />
        <Nav />
        <HamburgerButton />
      </div>
    </header>
  )
}

export default SiteHeader
