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

  return (
    <Styled.root>
      <Normalize />
      <SiteContainer>
        <Header />
        <Subheader />
        <Main>
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer footerBG={data.settings.footerBackground.asset.url} />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
