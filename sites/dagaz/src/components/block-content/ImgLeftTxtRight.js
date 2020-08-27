/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
const sanityConfig = {projectId: 'ws0rvaun', dataset: 'production'}



//import { buildImageObj } from '../../lib/helpers'
//import { imageUrlFor } from '../../lib/image-url'

function ImgLeftTxtRight (props) {
  const SanityImage = getFluidGatsbyImage(props.blockImage,{ maxWidth: 400 }, sanityConfig)
  return (
    <div>
      <Grid
      gap={4}
      columns= {['1fr', '1fr 2fr']}
      sx= {{
        marginBottom: 4,
        alignItems: 'center'
      }}
      >
      <Box><Img fluid= {SanityImage} sx= {{
        maxWidth: ['100%','150px'],
        margin: '0 auto'

      }} /></Box>
      <Box >
        <h4>{props.title}</h4>
        <div>{props.text}</div>
      </Box>
      </Grid>
    </div>
  )
}

export default ImgLeftTxtRight;
