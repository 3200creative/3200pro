import React from 'react'
import { Link } from 'gatsby'

// import { buildImageObj } from '../../lib/helpers'
// import { imageUrlFor } from '../../lib/image-url'

function ButtonBlock({ props, parentProps }) {
  const sanityProps = parentProps || props
  return (
    <div>
      {sanityProps.buttons.map((btn) => (
        <Link key={btn.key} to={btn.href}>
          <Button>{btn.buttonTxt}</Button>
        </Link>
      ))}
    </div>
  )
}

export default ButtonBlock
