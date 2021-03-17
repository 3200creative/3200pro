/** @jsx jsx */
import { jsx } from "theme-ui"
import JotformEmbed from 'react-jotform-embed';


const Jotform = ({ jotformURL }) => (
    <JotformEmbed src={jotformURL} />
)
export default Jotform