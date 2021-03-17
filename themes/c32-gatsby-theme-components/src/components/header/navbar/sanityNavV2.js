/** @jsx jsx */
import { NavContext } from "c32-gatsby-theme-core";
import { useContext } from "react";
import { jsx } from "theme-ui";
import CTALink from "./CTALink";

const SanityNav2 = ({navMenuItems}) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const  navItems  = navMenuItems
  return (
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
        variant: "variants.navStyles",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="flex">
        
      {(navItems || []).map((c, i) => (
        <div>
          <CTALink key={`cta_${i}`} {...c} />
        </div>
      ))}
    </div>
    </nav>
  )
}

export default SanityNav2
