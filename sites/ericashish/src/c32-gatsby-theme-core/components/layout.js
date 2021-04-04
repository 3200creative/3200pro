/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import Normalize from 'c32-gatsby-theme-core/src/utils/normalize-css'
import SiteContainer from 'c32-gatsby-theme-core/src/components/site-container'
import Header from 'c32-gatsby-theme-core/src/components/header'
import Main from 'c32-gatsby-theme-core/src/components/main'
import ContentContainer from 'c32-gatsby-theme-core/src/components/content-container'
import Footer from 'c32-gatsby-theme-core/src/components/footer'
import SiteFooter from 'c32-gatsby-theme-components/src/components/footer/sanityMenuFooter'

import ArticlesContextProvider from '../../components/articleFeedLayout'

const SiteLayout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()
  const shadow =
    colorMode == 'light'
      ? 'inset 0px -600px 500px -300px rgba(41,44,52,.10)'
      : 'inset 0px -600px 500px -300px rgba(41,44,52,.5)'
  return (
    <Styled.root sx={{ boxShadow: shadow }}>
      <Normalize />
      <ArticlesContextProvider>
        <SiteContainer>
          <Header />
          <Main>
            <ContentContainer>{children}</ContentContainer>
          </Main>
          <SiteFooter />
          <Footer />
        </SiteContainer>
      </ArticlesContextProvider>
    </Styled.root>
  )
}

export default SiteLayout
