/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe("pk_test_51H4Y2EIZVy7BW60Ba62HN1ZKmroMoZNdHYbRhBVOk5us7mhPe527OQuAnhbBsjnq5T8mmSB1JiLiHWhi2xrNzPwH00E2bsVzK2")
const mode = 'subscription'
const successUrl = 'http://localhost:8000/payment-complete'
const cancelUrl = 'http://localhost:8000/payment-error'
// Prices
const hourly10 = 'price_1H4ZpYIZVy7BW60BadpDS3VM'
const testProduct = 'price_1H74m0IZVy7BW60BDVej9nHM'

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

const dailyDollar = async event => {
  
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: testProduct, quantity: 1 }],
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
    case 'i': 
      product = monthly10hours;
      simpleName = 'Monthly 10 Hours'
      client = 'Ryan'
      message = `Hi ${client}, please click checkout to review purchase and make payment.`
      break;
    case 'info@3200creative.com': 
      product = dailyDollar
      simpleName = 'Daily Dollar'
      client = 'Ryan'
      message = `Hi ${client}, your about to pay yourself a dollar a day.`
      break
    case 'chris@grandscape.com':
      product = monthly10hours;
      simpleName = 'Monthly 10 Hours'
      client = 'Chris'
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