/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import { FooterData } from "./data/footerData"
import * as FontIcon from "react-icons/fa"
import BlockText from '../block-text'
import SanityRoutingNav from "../header/navbar/sanityRoutingNav"
import FooterLogoBanner from './footerLogoBanner'

const FooterSections = ({footerBG}) => {
  const { title } = useSiteMetadata()
  const { developer } = useSiteMetadata()
  const { developerLink } = useSiteMetadata()
  const { additionalLinks } = useSiteMetadata()
  const { footerNavItems } = useSiteMetadata()
  const {footer} = FooterData()
  const bg = footerBG

  // Sanity Footer Sections
  const { sectionTitle } = FooterData()
  return (
    <>
    <FooterLogoBanner />
    <div
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        color: "footer.text",
        bg: "footer.background",
        display: 'flex',
        a: {
          color: "footer.links",
          textDecoration: 'none',
        },
        textAlign: 'center',
        variant: "variants.footerSections",
        
      }}
    >
      {footer.footerSection.map(footerSections => (
        <div key={`fs-${footerSections.title}`} sx={{ mx: 4, variants: 'variants.footerSections.title' }}>
          <div sx={{
            fontSize: 2,
            variant: 'variants.footerSections.title'
          }}>{footerSections.title}</div>
          <div>
          {footerSections._rawText && <BlockText blocks={footerSections._rawText} />}
          {footerSections.menu ? (<SanityRoutingNav navMenuItems={footerSections.menu.items} variant="footerMenu"/>) : 'no menu'}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default FooterSections
