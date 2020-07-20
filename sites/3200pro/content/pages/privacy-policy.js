/** @jsx jsx */
import { jsx } from "theme-ui"
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { Layout } from "c32-gatsby-theme-core"
import Container from 'c32-gatsby-theme-core/src/components/container'

const CheckoutPage = () => (
    <SiteLayout>
        <Container>
        <div
          sx= {{
            variant: 'variants.standardPage'
          }}
        >
          <h1>Privacy Policy</h1>
            
        </div>
      </Container>
    </SiteLayout>
)

export default CheckoutPage