import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

const Typeform = ({ url, buttonText }) => {
    return (
    <div>
        <ReactTypeformEmbed 
            url= { url || '#' }
            buttonText= { buttonText ||  'Button Text Not Found' }
        />
    </div>
  )
}

export default Typeform
