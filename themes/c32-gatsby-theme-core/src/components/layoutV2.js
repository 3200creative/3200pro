/* eslint-disable no-use-before-define */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Normalize from "../utils/normalize-css"
import SiteContainer from "./site-container"
import HeaderRoutingSanity from "./headerRoutingSanity"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"
import { motion, useViewportScroll} from "framer-motion"

const Layout = ({ children, navMenuItems, contactMenuItems}) => {
    const { scrollYProgress } = useViewportScroll()
  return (
    <Styled.root sx={{variant: 'variants.root'}}>
      <Normalize />
      <SiteContainer>
        <HeaderRoutingSanity navMenuItems={navMenuItems} contactMenuItems={contactMenuItems}  />
        <Main>
        <motion.path
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ pathLength: scrollYProgress }}
          sx={{
            background: 'black'
          }}
        />
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
