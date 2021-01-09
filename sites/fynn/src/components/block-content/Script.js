/** @jsx jsx */
import { jsx } from "theme-ui"
import Script from 'c32-gatsby-theme-components/src/components/script/script'

function SanityScript (props) {
  return (
    <Script scriptURL={props.url} />
  )
}

export default SanityScript
