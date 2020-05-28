/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Normalize from "../utils/normalize-css"
import SiteContainer from "./site-container"
import Header from "./header"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"

const SiteLayout = ({ children }) => {
  return (
    <Styled.root>
      <Normalize />
      <SiteContainer>
        <Header />
        <Main>
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
