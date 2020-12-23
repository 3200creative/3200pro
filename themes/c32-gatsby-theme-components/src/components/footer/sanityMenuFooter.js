/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import { FooterData } from "./data/footerData"
import * as FontIcon from "react-icons/fa"
import BlockText from '../block-text'


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
    <div
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        color: "footer.text",
        bg: "footer.background",
        a: {
          color: "footer.links",
          textDecoration: 'none',
        },
        textAlign: 'center',
        variant: "variants.footerSections",
        
      }}
    >
      {footer.footerSection.map(footerSections => (
        <div key={`fs-${footerSections.title}`} sx={{
          
          mx: 4
        }}>
          <div sx={{
            fontSize: 2,
            variant: 'variants.footerSections.title'
          }}>{footerSections.title}</div>
          <div>
          {footerSections._rawText && <BlockText blocks={footerSections._rawText} />}
          <ul>
            {footerSections.menu.button.map(button => (
              <li key={`fsmb-${button.buttonTxt}`} sx={{
                display: button.icon ? 'inline-block!important' : null,
                paddingRight: button.icon ? '20px!important' : null,
                lineHeight: button.icon ? '2!important' : null,
                width: ['100%', 'max-content', null, null]
                
              }}><Link to={button.href} sx={{width: '100%'}}>{button.icon ? (<div sx={{variant: 'variants.footerSections.icon'}}>{React.createElement(FontIcon[button.icon])}</div>): button.buttonTxt}</Link></li>
            )
              )}
          </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterSections
