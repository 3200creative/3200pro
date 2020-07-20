/** @jsx jsx */
import { jsx } from "theme-ui"
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { Layout } from "c32-gatsby-theme-core"
import Container from 'c32-gatsby-theme-core/src/components/container'
import Checkout from '../../src/components/subscriptionButton'

const CheckoutPage = () => (
    <SiteLayout>
        <Container>
        <div
          sx= {{
            variant: 'variants.standardPage'
          }}
        >
          <h1>Client Services</h1>
            <Checkout />
        </div>
      </Container>
    </SiteLayout>
)

export default CheckoutPage