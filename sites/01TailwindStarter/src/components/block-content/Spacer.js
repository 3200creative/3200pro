import React from 'react'

function Spacer(props) {
  return (
    <>
      {(props.spacerType == 'clearline' && <div />) || (
        <div sx={{ variant: 'variants.clear' }} />
      )}
    </>
  )
}

export default Spacer
