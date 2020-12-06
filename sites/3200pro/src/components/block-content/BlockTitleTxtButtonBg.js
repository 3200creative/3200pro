/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import BlockText from '../block-text'
import ButtonBlock from './ButtonBlock'
import Figure from './Figure'

function BlockTitleTxtButtonBg (props) {
  return (
    <>
    <div sx={{display: 'block', zIndex: '3', width: '100%'}}><div sx={{width: '50%', float: 'right'}}><Figure parentProps={props.background} variant='variants.blockTitleTxtButtonBg' disableStyling='true' /></div></div>
    <div sx={{display: 'block', zIndex: '5';}}>
        <div><h1>{props.title}</h1>
        {props._rawExcerpt && (
            <BlockText blocks={props.text} />
        )}
        <ButtonBlock parentProps={props.buttons}/>
        </div>
      
    </div>
    </>
  )
}

export default BlockTitleTxtButtonBg