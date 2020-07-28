/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../../c32-gatsby-theme-core/utils/use-site-metadata"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { developer } = useSiteMetadata()
  const { developerLink } = useSiteMetadata()
  const { additionalLinks } = useSiteMetadata()
  return (
    <footer
      sx={{
        gridArea: "footer",
        color: "footer.text",
        bg: "footer.background",
        px: 3,
        pt: 100,
        pb: 3,
        a: {
          color: "footer.links",
          textDecoration: 'none',
        },
        textAlign: 'center',
        variant: "variants.footer",
        
      }}
    >
    <p>Address: 11292 86th Ave N Suite 100, Maple Grove, MN 55369 | Phone: 	<a href='tel:612-460-0427'>(612) 460-0427</a> </p>
      <Styled.p sx={{ 
        m: 0, 
        mx: 'auto'
        }}>
        © {new Date().getFullYear()} {title} | Site Design: <a href={developerLink}> {developer ? developer : 'Localized Pro'}</a>
      </Styled.p>
      <ul>
    {
      additionalLinks ? (
        additionalLinks.map(addtionalLink => (
          <li><Link to={addtionalLink.url}>{addtionalLink.name}</Link></li>
        ))
      ) : null 
    }
    </ul>
    </footer>
  )
}

export default SiteFooter
