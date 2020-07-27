/** @jsx jsx */
import { jsx } from "theme-ui"
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import Container from 'c32-gatsby-theme-core/src/components/container'

const CheckoutPage = () => (
    <SiteLayout>
        <Container>
        <div
          sx= {{
            variant: 'variants.standardPage'
          }}
        >
           <h1>Payment Error</h1>
           <p>Please contact us if you have questions.</p>
        </div>
      </Container>
    </SiteLayout>
)

export default CheckoutPage