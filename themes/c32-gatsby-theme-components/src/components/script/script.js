/** @jsx jsx */
import { jsx } from "theme-ui"
import Gist from 'react-gist'

const Script = ({ scriptURL, ...props }) => (
  <div sx= {{
    variant: 'variants.gist'
  }}
  >
  <Gist id={scriptURL}/>
  </div>
)
export default Script