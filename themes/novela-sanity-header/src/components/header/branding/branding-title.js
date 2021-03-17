/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "c32-gatsby-theme-core"
import { HeaderData }  from '../../../utils/headerData'


const SiteTitle = () => {
  const { title } = HeaderData()
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
        {(title != null ? title : <p>No Title</p>)}
      </Styled.h1>
    </Link>
  )
}

export default SiteTitle
