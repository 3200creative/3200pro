/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Button } from 'theme-ui';
import Icons from './Icons';

function ButtonBlock ({parentProps, ...rest}) {
  const sanityProps = parentProps ? parentProps : rest
  return (
    <div
    sx={{ width: '100%', margin: '0 auto', textAlign: 'center', variant: 'variants.buttonBlock'
    }}
    >
    {sanityProps.buttons.map(btn => (
      <Link  key={btn.key} to={btn.href}>
        <Button sx={{my: 4, mx: 2,backgroundColor: btn.buttonColor.hex, variant: 'variants.buttons'}}>
          {btn.buttonTxt}{btn.icon && (<span sx= {{pl:3}}>{Icons(btn.icon)}</span>)}
        </Button>
      </Link>
    ))}
    </div>
  )
}

export default ButtonBlock;