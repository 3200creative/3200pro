/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from 'react'
import reactStringReplace from 'react-string-replace'
// Attention future developer or me... These are offset. the 'let replaces the previous coloredTitle'. Forgetting this will cost additional development time...
const TxtColorChange = ({colors, txtBlock}) => {
let ColoredTitle1 = reactStringReplace(txtBlock, 'Music.', (match, i) => (
    <span key={match + i} style={{ color: colors.musicColor.hex }}>{match}</span>
  ))
  let ColoredTitle2 = reactStringReplace(ColoredTitle1, 'Tea.', (match, i) => (
    <span key={match + i} style={{ color: colors.teaColor.hex }}>{match}</span>
  ))
  let ColoredTitle3 = reactStringReplace(ColoredTitle2, 'Business.', (match, i) => (
    <span key={match + i} style={{ color: colors.businessColor.hex }}>{match}</span>
  ))
  let ColoredTitle4 = reactStringReplace(ColoredTitle3, 'Life.', (match, i) => (
    <span key={match + i} style={{ color: colors.lifeColor.hex }}>{match}</span>
  ))
  let ColoredTitle5 = reactStringReplace(ColoredTitle4, 'Music', (match, i) => (
    <span key={match + i} style={{ color: colors.musicColor.hex }}>{match}</span>
  ))
  let ColoredTitle6 = reactStringReplace(ColoredTitle5, 'Tea', (match, i) => (
    <span key={match + i} style={{ color: colors.teaColor.hex }}>{match}</span>
  ))
  let ColoredTitle7 = reactStringReplace(ColoredTitle6, 'Business', (match, i) => (
    <span key={match + i} style={{ color: colors.businessColor.hex }}>{match}</span>
  ))
  let ColoredTitle8 = reactStringReplace(ColoredTitle7, 'Life', (match, i) => (
    <span key={match + i} style={{ color: colors.lifeColor.hex }}>{match}</span>
  ))
  return (
      <>
      {ColoredTitle8}
      </>
  )

}

export default TxtColorChange