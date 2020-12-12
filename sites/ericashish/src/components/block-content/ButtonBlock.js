/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from 'theme-ui'

//import { buildImageObj } from '../../lib/helpers'
//import { imageUrlFor } from '../../lib/image-url'

function ButtonBlock ({parentProps, ...rest}) {
  const sanityProps = parentProps ? parentProps : rest
  return (
    <div
    sx={{
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    variant: 'variants.buttonBlock'
    }}
    >
    {sanityProps.buttons.map(btn => (
      <Link  key={btn.key} to={btn.href}>
        <Button sx={{
          my: 2,
          mx: 2,
          backgroundColor: btn.buttonColor.hex
        }}
        >{btn.buttonTxt}</Button>
      </Link>
    ))}
    </div>
  )
}

export default ButtonBlock;
