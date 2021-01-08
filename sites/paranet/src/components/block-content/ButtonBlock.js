/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from 'theme-ui'

//import { buildImageObj } from '../../lib/helpers'
//import { imageUrlFor } from '../../lib/image-url'

function ButtonBlock (props) {
  return (
    <nav 
    sx={{
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    variant:  'variants.buttonBlock'
    }}
    >
    {props.buttons.map(btn => (
      <Link key={btn.key} to={btn.href}>
        {btn.buttonTxt}
      </Link>
    ))}
    </nav>
  )
}

export default ButtonBlock;
