/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useSiteMetadata } from "c32-gatsby-theme-core"

const SiteFooter = () => {
  const { title } = useSiteMetadata()

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
        © {new Date().getFullYear()} {title} | <a href='http://localizedpro.com/'> Site Design: Localized Pro</a> 
      </Styled.p>
    </footer>
  )
}

export default SiteFooter
