/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useLayoutEffect, useState, useRef } from "react";
import BlockText from '../block-text'
import ButtonBlock from './ButtonBlock'
import Xarrow from 'react-xarrows'
import Figure from './Figure'

function BlockTitleTxtButtonBg (props) {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div sx={{ height: '600px', width: '1800px', maxWidth: '100%', my: '5'}}>
      <div sx={{display: 'block',  position: 'absolute'}}>
        <div sx={{width: ['500px', null,'600px'], float: 'right', marginRight: ['-30%',null,'-50%']}}>
          <Figure parentProps={props.background} variant='variants.blockTitleTxtButtonBg' disableStyling='true' />
        </div>
      </div>
    <div sx={{display: 'block', zIndex: '5', width: '80%', position: 'absolute', pt: '5'}}>
        <div>
          <h1 id='title' sx={{fontSize: ['8vw', '6vw', '5vw', '3vw']}}>{props.title}<span id='arrowStart'>.</span></h1>
          {props.text && (
            <div sx={{mb: [6, null, 5], width: ['100%','50%', '30%', null]}}>
              <BlockText blocks={props.text} />
            </div>
          )}
          <div id='bb' sx={{float: 'left', width: 'max-content', a:{button:{boxShadow:'shadowStyle2', transition: 'button','&:hover':{boxShadow: 'none', backgroundColor: 'text', transition: 'button'}}} }}><ButtonBlock parentProps={props.buttons}/></div>
        </div>  
    </div>
    <Xarrow start='arrowStart' end='bb' color='#ff8336' path='grid'/>
    </div>
  )
}

export default BlockTitleTxtButtonBg