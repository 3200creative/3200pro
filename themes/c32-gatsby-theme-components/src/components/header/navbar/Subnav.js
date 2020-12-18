/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "c32-gatsby-theme-core"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import CTALink from "./CTALink";

const Subnav = ({subMenu}) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const  navItems  = subMenu.navItem
  return (
    <div
      role="navigation"
      aria-label="main-navigation"
      sx={{display: "none"}}
    >
      <div className="flex">
      Here
      {(navItems || []).map((c, i) => (
        <div>
          <CTALink key={`cta_${i}`} {...c} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Subnav
