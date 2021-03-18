import React from 'react';
import JotformEmbed from 'react-jotform-embed';


const Jotform = ({ jotformURL }) => (
    <JotformEmbed src={jotformURL} />
)
export default Jotform