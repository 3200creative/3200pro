/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_live_51H4Y2EIZVy7BW60B6qJIMWASOREXD7Ff07FtV68K1yWe2isWDmtBjio92rVNQF1aVMeaDsm5w8dpiLX6yCJP6gLu00UvMRa6yH'
)
const mode = 'subscription'
const successUrl = 'http://3200.pro/payment-complete'
const cancelUrl = 'http://3200.pro/payment-error'
// Prices
const hourly10 = 'price_1H4ZhSIZVy7BW60BiOVbeMI0'
const hourly40 = 'price_1Ha7XAIZVy7BW60BitkeQFb0'
const monthlyHosting100 = 'price_1H4cNeIZVy7BW60BTuqHWnaF'
const fiveHourSingular625 = 'price_1H87USIZVy7BW60BYRawg1gv'
const forkandBeansHosting = 'price_1H8AvEIZVy7BW60BL7h3jLto'
const pgHosting = 'price_1IpaeoIZVy7BW60ByxMG8AtE'

const clientEmail = ''
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
      },
    },
  }
}

const monthly10hours = async (event) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: hourly10, quantity: 1 }],
    mode,
    successUrl,
    cancelUrl,
  })
  if (error) {
    console.warn('Error:', error)
  }
}

const pgMonthlyHosting = async (event) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: pgHosting, quantity: 1 }],
    mode,
    successUrl,
    cancelUrl,
  })
  if (error) {
    console.warn('Error:', error)
  }
}

const monthly40hours = async (event) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: hourly40, quantity: 1 }],
    mode,
    successUrl,
    cancelUrl,
  })
  if (error) {
    console.warn('Error:', error)
  }
}

const hosting100 = async (event) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: monthlyHosting100, quantity: 1 }],
    mode,
    successUrl,
    cancelUrl,
  })
  if (error) {
    console.warn('Error:', error)
  }
}

const FbHosting = async (event) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: forkandBeansHosting, quantity: 1 }],
    mode,
    successUrl,
    cancelUrl,
  })
  if (error) {
    console.warn('Error:', error)
  }
}

const monthly5hours = async (event) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: fiveHourSingular625, quantity: 1 }],
    mode,
    successUrl,
    cancelUrl,
  })
  if (error) {
    console.warn('Error:', error)
  }
}
const Checkout = () => {
  let product
  let client
  let welcome
  let message
  let simpleName
  let greeting
  const signature = 'Thanks, Ryan'
  const { value, bind, reset } = useInput('')
  switch (value) {
    case 'lbpara':
      product = monthly40hours
      simpleName = 'Monthly payment of $5,000.'
      client = 'Len'
      welcome = `Hi ${client},`
      message = `Please click checkout to make the payment. Please let me know if you have any questions.`
      break
    case 'amyp':
      product = monthly5hours
      simpleName = 'Monthly payment of $625 (5hrs. @ $125/hr.).'
      client = 'Amy'
      welcome = `Hi ${client},`
      message = `Please click checkout to make the payment. Please let me know if you have any questions.`
      break
    case 'js21':
      product = pgMonthlyHosting
      client = 'Jon'
      simpleName = 'Monthly hosting with 3200 Creative'
      greeting = `Hello!`
      welcome = `Hi ${client},`
      message = `Please click checkout to start monthly hosting payments. Please let us know if you have any questions.`
      break
    case 'fbhosting':
      product = FbHosting
      simpleName = '$100/mo + 30 trial to even out double charge'
      client = 'Cara'
      welcome = `Hi ${client},`
      message = `Please click checkout to make the first payment. Our monthly service is described in our contract. Please let me know if you have any questions.`
      break
    default:
      product = monthly5hours
  }
  return (
    <>
      <p>Please enter your password for access:</p>
      <form>
        <label>
          <input
            type="text"
            placeholder="password"
            type="password"
            {...bind}
            sx={{ p: 2 }}
          />
        </label>
      </form>
      {/* Test Login Setup */}
      <div>
        {client == 'Len' ? (
          <>
            <h2>Paranet Web Development: {simpleName} </h2>
            <p>{welcome}</p>
            <p>{message}</p>
            <p>{signature}</p>
            <button onClick={product} sx={{ variant: 'variants.ghostbutton' }}>
              Checkout
            </button>
          </>
        ) : null}
      </div>
      <div>
        {/* Test Login Setup */}
        <div>
          {client == 'Jon' ? (
            <>
              <h2>Monthly Website Maintenance: {simpleName} </h2>
              <p>{welcome}</p>
              <p>{message}</p>
              <p>{signature}</p>
              <button
                onClick={product}
                sx={{ variant: 'variants.ghostbutton' }}
              >
                Checkout
              </button>
            </>
          ) : null}
        </div>
        <div />
        {/* F & B */}
        {client == 'Cara' ? (
          <>
            <h2>Hosting Payment: {simpleName} </h2>
            <p>{message}</p>
            <p>{signature}</p>
            <button onClick={product} sx={{ variant: 'variants.ghostbutton' }}>
              Checkout
            </button>
          </>
        ) : null}
      </div>
      {/* Monthly $100 Hosting */}
      <div>
        {product == hosting100 ? (
          <>
            <h2>Product: {simpleName} </h2>
            <p>{greeting}</p>
            <p>{message}</p>
            <p>{signature}</p>
            <button onClick={product} sx={{ variant: 'variants.ghostbutton' }}>
              Checkout
            </button>
          </>
        ) : null}
      </div>
    </>
  )
}
export default Checkout
