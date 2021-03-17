import React from 'react'

function Spacer (props) {
  return (
    <>
    {(props.spacerType && (<div className={props.spacerType}></div>)) || (<div className='clear-both py-2'></div>)}
    </>
  )
}

export default Spacer;
