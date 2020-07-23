/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe("pk_live_51H4Y2EIZVy7BW60B6qJIMWASOREXD7Ff07FtV68K1yWe2isWDmtBjio92rVNQF1aVMeaDsm5w8dpiLX6yCJP6gLu00UvMRa6yH")
const mode = 'subscription'
const successUrl = 'http://3200.pro/payment-complete'
const cancelUrl = 'http://3200.pro/payment-error'
// Prices
const hourly10 = 'price_1H4ZhSIZVy7BW60BiOVbeMI0'
const monthlyHosting100 = 'price_1H4cNeIZVy7BW60BTuqHWnaF'
const fiveHourSingular625 = 'price_1H87USIZVy7BW60BYRawg1gv'
const lasalleServices625 = 'price_1H87TRIZVy7BW60BDqnTKC66'
const forkandBeansHosting = 'price_1H8AvEIZVy7BW60BL7h3jLto'

let clientEmail = ''
const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

const monthly10hours = async event => {
  
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: hourly10, quantity: 1 }],
    mode: mode,
    successUrl: successUrl,
    cancelUrl: cancelUrl,
  })
  if (error) {
    console.warn("Error:", error)
  }
}

const hosting100 = async event => {
  
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: monthlyHosting100, quantity: 1 }],
    mode: mode,
    successUrl: successUrl,
    cancelUrl: cancelUrl,
  })
  if (error) {
    console.warn("Error:", error)
  }
}

const FbHosting = async event => {
  
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: forkandBeansHosting, quantity: 1 }],
    mode: mode,
    successUrl: successUrl,
    cancelUrl: cancelUrl,
  })
  if (error) {
    console.warn("Error:", error)
  }
}

const monthly5hours = async event => { 
  alert('5 hours')
}
const Checkout = () => {
  let product, client, message, simpleName, greeting;
  const signature = 'Thanks, Ryan'
  const { value, bind, reset } = useInput('');
  switch(value) {
    case 'chris@grandscape.com':
      product = monthly10hours;
      simpleName = 'Monthly 10 Hours'
      client = 'Chris'
      message = `Hi ${client}, please click checkout to make the payment. Please let me know if you have any questions.`
      break;
    case 'prohosting':
      product = hosting100;
      simpleName = 'Monthly hosting with 3200 Creative'
      greeting = `Hello!`
      message = `Please click checkout to start monthly hosting payments. Please let us know if you have any questions.`
      break;
    case 'fbhosting':
      product = FbHosting;
      simpleName = '$100/mo + 30 trial to even out double charge'
      client = 'Cara'
      message = `Hi ${client}, Please click checkout to make the payment. Please let me know if you have any questions.`
      break;
    default:
      product = monthly5hours;
  }
  return (
    <>
    <p>Please enter your password for access:</p>
    <form>
    <label>
      <input type='text' placeholder='password' type="password" {...bind}
      sx = {{ p: 2}}
      />
    </label>
    </form>
    {/* Test Login Setup */}
    <div>
    {client == 'Chris' ? (
    <>
    <h2>Grandscape Service: {simpleName} </h2>
    <p>{message}</p>
    <p>{signature}</p>
    <button onClick={ product }
    sx={{variant: 'variants.ghostbutton'}}
    >Checkout</button>
    </>
    ) : null}
    </div>
    <div>
    {/* F & B*/}
    {client == 'Cara' ? (
    <>
    <h2>Hosting Payment: {simpleName} </h2>
    <p>{message}</p>
    <p>{signature}</p>
    <button onClick={ product }
    sx={{variant: 'variants.ghostbutton'}}
    >Checkout</button>
    </>
    ) : null}
    </div>
    {/* Monthly $100 Hosting*/}
    <div>
    {product == hosting100 ? (
    <>
    <h2>Product: {simpleName} </h2>
    <p>{greeting}</p>
    <p>{message}</p>
    <p>{signature}</p>
    <button onClick={ product }
    sx={{variant: 'variants.ghostbutton'}}
    >Checkout</button>
    </>
    ) : null}
    </div>
    </>
  )
}
export default Checkout