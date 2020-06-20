/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "c32-gatsby-theme-core"
import { useSiteMetadata } from "c32-gatsby-theme-core"

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { menuLinks } = useSiteMetadata()
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        flexDirection: ["column", null, "row", null, null],
        variant: "variants.navStyles",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <ul
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row", null, null],
          flexWrap: "wrap",
          textAlign: ["center", null, "left", null, null],
          listStyle: "none",
          m: 0,
          p: 0,
        }}
      >
        {menuLinks.map(link => (
          <li
            sx={{
              my: [2, null, 0, null, null],
              mx: 1,
              fontFamily: "navLinks",
              a: {
                color: isNavOpen ? "header.textOpen" : "header.text",
                textDecoration: "none",
                py: 1,
                px: 1,
                mr: [0, null, 2, null, null],
                position: "relative",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "all 0.2s ease",
                ":hover, :focus": {
                  color: "primary",
                },
              },
              ".active": {
                color: "primary",
              },
              ":hover > ul": {
                visibility: "visible",
                opacity: "1",
                display: "block",
              },
              ":focus-within > ul": {
                visibility: "visible",
                opacity: "1",
                display: "block",
              },
              variant: "variants.navLinkStyles",
            }}
            key={link.name}
          >
            <Link
              to={link.link}
              activeClassName="active"
              onClick={() => setIsNavOpen(false)}
              aria-haspopup={link.subMenu != null ? true : false}
            >
              {link.name} {link.subMenu && link.subMenu.length > 0 }
            </Link>
            {link.subMenu && link.subMenu.length > 0 ? (
              <ul
                sx={{
                  p: [1, null, 3, null, null],
                  minWidth: "10rem",
                  position: ["static", null, "absolute", null, null],
                  transition: "all 0.5s ease",
                  visibility: ["visible", null, "hidden", null, null],
                  opacity: ["1", null, "0", null, null],
                  display: ["block", null, "none", null, null],
                  listStyle: "none",
                  bg: isNavOpen ? "header.backgroundOpen" : "header.background",
                  ":hover": {
                    visibility: "visible",
                    opacity: "1",
                    display: "block",
                  },
                }}
                aria-label="dropdown"
              >
                {link.subMenu.map(subLink => (
                  <li
                    sx={{
                      my: [2, null, 2, null, null],
                      mx: 1,
                      fontFamily: "navLinks",
                      a: {
                        color: isNavOpen ? "header.textOpen" : "header.text",
                        textDecoration: "none",
                        fontSize: [1, null, "inherit", null, null],
                        py: 1,
                        px: 1,
                        mr: [0, null, 2, null, null],
                        textTransform: 'uppercase',
                        position: "relative",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        transition: "all 0.2s ease",
                        ":hover, :focus": {
                          color: "primary",
                        },
                      },
                      ".active": {
                        color: "primary",
                      },

                      variant: "variants.navSubLinkStyles",
                    }}
                    key={link.name}
                  >
                    <Link
                      to={subLink.link}
                      activeClassName="active"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
