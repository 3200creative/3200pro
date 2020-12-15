/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

function Link ({mark, children}) {
  const { blank, href } = mark
  return (
  <span>{blank ?
    <a href={href} target="_blank" rel="noopener">{children}</a>
    : <a href='#' rel=">">{children}</a>}</span>
  )
}

export default Link

