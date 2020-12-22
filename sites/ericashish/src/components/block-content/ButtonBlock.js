/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Button } from 'theme-ui';
import Icons from './Icons';

function ButtonBlock ({parentProps, ...rest}) {
  const sanityProps = parentProps ? parentProps : rest
  return (
    <div
    sx={{ width: '100%', margin: '0 auto', textAlign: sanityProps.position, variant: 'variants.buttonBlock'
    }}
    >
    {sanityProps.buttons.map(btn => (
      <Link  key={btn.key} to={btn.href} 
      target={btn.urlType = 'externalUrl' ? '_blank' : null}
      rel={btn.urlType = 'externalUrl' ? 'noopener' : null}
      >
        <Button sx={{ my: 4, mx: 2,backgroundColor: btn.buttonColor.hex, variant: 'variants.buttons'}}>
        <span>{btn.buttonTxt}</span>{btn.icon && (<span sx={{float: btn.iconPosition, pl: btn.iconPosition = 'left' ? 2 : 0, pr: btn.iconPosition = 'right' ? 2 : 0}}>{Icons(btn.icon)}</span>)}
        </Button>
      </Link>
    ))}
    </div>
  )
}

export default ButtonBlock;