/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Normalize from "c32-gatsby-theme-core/src/utils/normalize-css"
import SiteContainer from "c32-gatsby-theme-core/src/components/site-container"
import Header from "c32-gatsby-theme-core/src/components/header"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "c32-gatsby-theme-core"
import Subheader from "c32-gatsby-theme-components/src/components/subheader/subheader"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'

import Main from "c32-gatsby-theme-core/src/components/main"
import ContentContainer from "c32-gatsby-theme-core/src/components/content-container"
import Footer from "c32-gatsby-theme-core/src/components/footer"

const SiteLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query layout {
      settings : sanitySiteSettings(_id: {eq: "siteSettings"}) {
        sitewideBackground {
          asset {
            _id
            url
          }
        }
        footerBackground {
          asset {
            _id
            url
          }
        }
      }
    }
    `
  )

  const sitewideBG = data.settings.sitewideBackground ? data.settings.sitewideBackground.asset.url : null;
  const footerBG = data.settings.footerBackground ? data.settings.footerBackground.asset.url : null;

  return (
    <Styled.root sx= {{
      backgroundImage: sitewideBG ? (`url(${sitewideBG})`): null,
    }}>
      <Normalize />
      <SiteContainer>
        <Header />
        <Subheader />
        <Main>
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer footerBG={footerBG ? footerBG : null} />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
