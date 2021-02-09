import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'c32-gatsby-theme-core'
import * as FontIcon from 'react-icons/fa'
import { FooterData } from './data/footerData'
import BlockText from '../block-text'

const FooterSections = ({ footerBG }) => {
  const { title } = useSiteMetadata()
  const { developer } = useSiteMetadata()
  const { developerLink } = useSiteMetadata()
  const { additionalLinks } = useSiteMetadata()
  const { footerNavItems } = useSiteMetadata()
  const { footer } = FooterData()
  const bg = footerBG

  // Sanity Footer Sections
  const { sectionTitle } = FooterData()
  return (
    <div>
      {footer.footerSection.map((footerSections) => (
        <div key={`fs-${footerSections.title}`}>
          <div>{footerSections.title}</div>
          <div>
            {footerSections._rawText && (
              <BlockText blocks={footerSections._rawText} />
            )}
            <ul>
              {footerSections.menu.button.map((button) => (
                <li key={`fsmb-${button.buttonTxt}`}>
                  <Link to={button.href}>
                    {button.icon ? (
                      <div>{React.createElement(FontIcon[button.icon])}</div>
                    ) : (
                      button.buttonTxt
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterSections
