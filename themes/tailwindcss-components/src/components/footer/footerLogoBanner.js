import React from 'react'
import { useSiteMetadata } from 'c32-gatsby-theme-core'

const FooterLogoBanner = ({ footerBG }) => {
  const { Logo, LogoDark } = useSiteMetadata()
  return (
    <div>
      <h1>Footer Banner Added. Must Use Component Shadowing.</h1>
    </div>
  )
}

export default FooterLogoBanner
