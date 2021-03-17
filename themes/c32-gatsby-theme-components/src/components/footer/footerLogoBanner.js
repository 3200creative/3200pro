/** @jsx jsx */
import { useSiteMetadata } from "c32-gatsby-theme-core"
import { jsx } from "theme-ui"


const FooterLogoBanner = ({footerBG}) => {
  const { Logo, LogoDark } = useSiteMetadata()
  return (
    <div sx={{variant: 'variants.footerLogoBanner'}}><h1>Footer Banner Added. Must Use Component Shadowing.</h1></div>
  )
}

export default FooterLogoBanner
