/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

function Quote (props) {
  return (
    <Styled.blockquote><p>"{props.text}"</p></Styled.blockquote>
  )
}

export default Quote
