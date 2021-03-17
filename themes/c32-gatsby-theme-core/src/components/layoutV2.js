/* eslint-disable no-use-before-define */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Normalize from "../utils/normalize-css"
import SiteContainer from "./site-container"
import HeaderRoutingSanity from "./headerRoutingSanity"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"

const Layout = (children, navMenuItems, contactMenuItems) => {
  return (
    <Styled.root sx={{variant: 'variants.root'}}>
      <Normalize />
      <SiteContainer>
        <HeaderRoutingSanity navMenuItems={navMenuItems} contactMenuItems={contactMenuItems}  />
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

export default Layout
