/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Normalize from "c32-gatsby-theme-core/src/utils/normalize-css"
import SiteContainer from "c32-gatsby-theme-core/src/components/site-container"
import Header from "c32-gatsby-theme-core/src/components/header"
import Main from "c32-gatsby-theme-core/src/components/main"
import ContentContainer from "c32-gatsby-theme-core/src/components/content-container"
import Footer from "c32-gatsby-theme-core/src/components/footer"

const SiteLayout = ({ children }) => {
  return (
    <Styled.root>
      <Normalize />
      <SiteContainer>
        <Header />
        <Main>
          <ContentContainer>
              {children}
          </ContentContainer>
        </Main>
        <Footer />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
