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

const monthly5hours = async event => { 
  alert('5 hours')
}
const Checkout = () => {
  let product, client, message, simpleName;
  const { value, bind, reset } = useInput('');
  switch(value) {
    case 'i': 
      product = monthly10hours;
      simpleName = 'Monthly 10 Hours'
      client = 'Ryan Murray'
      message = `Hi ${client} please click here to pay.`
      break;
    case 'info@3200creative.com': 
      product = monthly10hours
      break
    case 'chris@grandscape.com':
      product = monthly10hours;
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
    <h1>Client Services Payments</h1>
    <p>We use stripe to securly process all transactions. Please enter your email and follow the prompts for payment.</p>
    <form onSubmit={handleSubmit}>
    <label>
      <input type='text' {...bind}
      sx = {{  m: 2, p: 2}}
      />
    </label>
      <input type="submit"  placeholder='email' value="Submit" />
    </form>
    <div>
    {simpleName ? (
    <>
    <h2>Product: {simpleName} </h2>
    <button onClick={ product }
    sx={{variant: 'variants.ghostbutton'}}
    >{message}</button>
    </>
    ) : null}
    </div>
    </>
  )
}
export default Checkout