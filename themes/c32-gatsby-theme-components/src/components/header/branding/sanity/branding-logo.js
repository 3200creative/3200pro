/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useSiteMetadata } from "c32-gatsby-theme-core"
const SiteLogo = () => {
  const { title, logo } = useSiteMetadata()
  
  return (  
    <Link to="/" sx={{ textDecoration: "none" }}>
      <img
        sx={{
          mr: 2,
          variant: "variants.siteLogo",
          maxWidth: ['60vw', '30vw'],
          marginTop: '10px',
        }}
        src={logo}
        alt={title}
      />
    </Link>
  )
}

export default SiteLogo
