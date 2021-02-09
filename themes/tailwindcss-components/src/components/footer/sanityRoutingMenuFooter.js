import React from 'react'
import { useSiteMetadata } from 'c32-gatsby-theme-core'
import { FooterData } from './data/footerData'
import BlockText from '../block-text'
import SanityRoutingNav from '../header/navbar/sanityRoutingNav'
import FooterLogoBanner from './footerLogoBanner'

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
    <>
      <FooterLogoBanner />
      <div>
        {footer.footerSection.map((footerSections) => (
          <div key={`fs-${footerSections.title}`}>
            <div>{footerSections.title}</div>
            <div>
              {footerSections._rawText && (
                <BlockText blocks={footerSections._rawText} />
              )}
              {footerSections.menu ? (
                <SanityRoutingNav
                  navMenuItems={footerSections.menu.items}
                  variant="footerMenu"
                />
              ) : (
                'no menu'
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FooterSections
