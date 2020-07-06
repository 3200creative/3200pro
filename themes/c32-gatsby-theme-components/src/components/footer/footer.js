/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useSiteMetadata } from "c32-gatsby-theme-core"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { developer } = useSiteMetadata()
  const { developerLink } = useSiteMetadata()

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
      <Styled.p sx={{ 
        m: 0, 
        mx: 'auto'
        }}>
        © {new Date().getFullYear()} {title} | Site Design: <a href={developerLink}> {developer ? developer : 'Localized Pro'}</a> 
      </Styled.p>
    </footer>
  )
}

export default SiteFooter
