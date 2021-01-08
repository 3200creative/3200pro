/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "c32-gatsby-theme-core"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import CTALink from "./CTALink";

const Subnav = ({subNav}) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const  subnav  = subNav
  return (
    <div
      role="navigation"
      aria-label="main-navigation"
      sx={{display: "none", variant: 'variants.header.subnav'}}
    >
      <div sx={{display:"flex", flexDirection: "column"}}>
      {(subnav.items|| []).map((c, i) => (
          <CTALink key={`cta_${i}`} {...c} />
      ))}
    </div>
    </div>
  )
}

export default Subnav
