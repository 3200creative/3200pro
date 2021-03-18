import React from 'react'
import SiteContainer from './site-container'
import SiteHeader from './header'
import Main from './main'
import ContentContainer from './content-container'
import Footer from './footer'

const Layout = ({ children, navMenuItems, contactMenuItems }) => (
  <>
    <SiteContainer>
      <SiteHeader />
      <Main>
        <ContentContainer>{children}</ContentContainer>
      </Main>
      <Footer />
    </SiteContainer>
  </>
)

export default Layout
