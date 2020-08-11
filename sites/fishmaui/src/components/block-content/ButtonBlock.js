/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from 'theme-ui'

//import { buildImageObj } from '../../lib/helpers'
//import { imageUrlFor } from '../../lib/image-url'

function ButtonBlock (props) {
  return (
    <div 
    sx={{
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
    }}
    >
    {console.log('Buttons:')}
    {console.log(props.buttons)}
    {props.buttons.map(btn => (
      <Link key={btn.key} to={btn.href}>
        {btn.buttonTxt}
      </Link>
    ))}
    </div>
  )
}

export default ButtonBlock;
