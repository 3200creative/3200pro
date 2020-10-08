/** @jsx jsx */
import { jsx } from "theme-ui"
import { ReactTypeformEmbed } from 'react-typeform-embed'

const Typeform = ({ url, buttonText }) => {
    return (
    <div 
    sx={{
        minHeight: '600px',
        clear: 'both',
        float: 'left',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        border: '1px solid #999',
        borderRadius: '8',
        marginBottom: '40',
    }}>
        <ReactTypeformEmbed 
            url= { url || '#' }
            buttonText= { buttonText ||  'Button Text Not Found' }
        />
    </div>
  )
}

export default Typeform
