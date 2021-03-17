/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import { NavContext } from "c32-gatsby-theme-core"

const SiteTitle = () => {
  const { title } = useSiteMetadata()
  const [isNavOpen] = useContext(NavContext)

  return (
    <Link to="/" sx={{ textDecoration: "none" }}>
      <Styled.h1
        as="span"
        sx={{
          color: isNavOpen ? "header.textOpen" : "header.text",
          textDecoration: "none",
          fontFamily: "siteTitle",
          flex: "0 0 auto",
          m: 0,
          variant: "variants.siteTitle",
        }}
      >
        {title}
      </Styled.h1>
    </Link>
  )
}

export default SiteTitle
