/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { HeaderData }  from '../../../utils/headerData'

const SiteLogo = () => {
  const { title, logo } = HeaderData()
  return (
    <Link to="/" sx={{ textDecoration: "none" }}>
      {(logo
       ? <Img
        sx={{
            width: '120px',
            mr: 2,
            variant: "variants.siteLogo",
          }}
          fluid={logo}
          alt={title}
          imgStyle={{ objectFit: "contain" }}
        />
        : <p>No Logo In Sanity</p>
      )}
    </Link>
  )
}

export default SiteLogo
