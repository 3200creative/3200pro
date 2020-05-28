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
          height: [
            theme => theme.sizes.logoHeightXS,
            theme => theme.sizes.logoHeightS,
            theme => theme.sizes.logoHeightM,
            theme => theme.sizes.logoHeightL,
            theme => theme.sizes.logoHeightXL,
          ],
          minHeight: '50px',
          // width: [
          //   theme => theme.sizes.logoWidthXS,
          //   theme => theme.sizes.logoWidthS,
          //   theme => theme.sizes.logoWidthM,
          //   theme => theme.sizes.logoWidthL,
          //   theme => theme.sizes.logoWidthXL,
          // ],
          mr: 2,
          variant: "variants.siteLogo",
        }}
        src={logo}
        alt={title}
        imgStyle={{ objectFit: "contain" }}
      />
    </Link>
  )
}

export default SiteLogo
