/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from 'react'
import TextScramble from './textShuffleMaster'

function ShuffleText (props) {
  const Style = props.textStyle ? props.textStyle: 'span'
  const ShuffleText = props && props.phrase
  const [pause] = useState(false)  
  return (
    <div>
      <Style>
        {ShuffleText ? ShuffleText.map(section => (
          <>
            {section.string ? section.string :
            <section.textStyle sx={{fontSize: section.textSize ? section.textSize : 1}}  key={section.key} >
            <TextScramble
            texts={section.text}
            letterSpeed={5}
            nextLetterSpeed={100}
            pauseTime={3000}
            paused={pause}
          />
          </section.textStyle> }
          </>
        )): null}
      </Style>
    </div>
  )
}

export default ShuffleText