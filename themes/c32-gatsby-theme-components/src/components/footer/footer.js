/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { useSiteMetadata } from "c32-gatsby-theme-core"

const SiteFooter = ({footerBG}) => {
  const { title } = useSiteMetadata()
  const { developer } = useSiteMetadata()
  const { developerLink } = useSiteMetadata()
  const { additionalLinks } = useSiteMetadata()
  const { footerNavItems } = useSiteMetadata()
  const bg = footerBG
  console.log(`this is the background: ${bg}`);
  return (
    <footer
      sx={{
        backgroundImage: footerBG ? (`url(${bg})`): null,
        gridArea: "footer",
        color: "footer.text",
        bg: "footer.background",
        a: {
          color: "footer.links",
          textDecoration: 'none',
        },
        textAlign: 'center',
        variant: "variants.footer",
        
      }}
    >
      <div sx={{
        px: 3,
        pt: 100,
        pb: 3,
        variant: 'variants.footerOverlay'}}>
      <Styled.p sx={{ 
        m: 0, 
        mx: 'auto'
        }}>
        © {new Date().getFullYear()} {title} | Site Design: <a href={developerLink}> {developer ? developer : 'Localized Pro'}</a>
      </Styled.p>
      {footerNavItems ? (<ul>
    {
      footerNavItems ? (
        footerNavItems.map(footerNavItems => (
          <li><Link to={footerNavItems.href}>{footerNavItems.buttonTxt}</Link></li>
        ))
      ) : null 
    },
    {
      additionalLinks ? (
        additionalLinks.map(addtionalLink => (
          <li><Link to={addtionalLink.url}>{addtionalLink.name}</Link></li>
        ))
      ) : null 
    }
    </ul>) : null }
    </div>
    </footer>
  )
}

export default SiteFooter
