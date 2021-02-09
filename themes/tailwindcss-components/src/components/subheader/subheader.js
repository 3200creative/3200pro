
import react, { useContext } from "react"
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
    <section>
      <div>
        {useSanityNav ? (<SanityNav />) : (<Nav />)}
        <HamburgerButton />
        {useDarkMode == true && (<DarkModeIcon />) || null}
      </div>
    </section>
  )
}

export default SubHeader
