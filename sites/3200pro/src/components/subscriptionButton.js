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
  let product, client, message, simpleName;
  const signature = 'Thanks, Ryan'
  const { value, bind, reset } = useInput('');
  switch(value) {
    case 'chris@grandscape.com':
      product = monthly10hours;
      simpleName = 'Monthly 10 Hours'
      client = 'Chris'
      message = `Hi ${client}, please click checkout to make the payment. Please let me know if you have any questions.`
      break;
    case 'fbhosting':
      product = FbHosting;
      simpleName = '$100/mo + 30 Days free for doublecharging'
      client = 'Cara'
      message = `Hi ${client}, please click checkout to make the payment. Please let me know if you have any questions.`
      break;
    default:
      product = monthly5hours;
  }
  const handleSubmit = (evt) => {
      evt.preventDefault();
      clientEmail = value
      alert(`email: ${value}`)
      reset();
  }
  return (
    <>
    <p>Please enter your password for access:</p>
    <form onSubmit={handleSubmit}>
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
    {/* LaSalle Setup */}
    <div>
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
    {/* Test Ryan Setup */}
    <div>
    {client == 'Ryan' ? (
    <>
    <h2>Test Services: {simpleName} </h2>
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