/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import { FooterData } from "./data/footerData"
import * as FontIcon from "react-icons/fa"
import BlockText from '../block-text'
import SanityRoutingNav from "../header/navbar/sanityRoutingNav"


const FooterLogoBanner = ({footerBG}) => {
  const { Logo, LogoDark } = useSiteMetadata()
  return (
    <div sx={{variant: 'variants.footerLogoBanner'}}><h1>Footer Banner Added. Must Use Component Shadowing.</h1></div>
  )
}

export default FooterLogoBanner
