/** @jsx jsx */
import { NavContext, useSiteMetadata } from "c32-gatsby-theme-core"
import { useContext } from "react"
import { jsx } from "theme-ui"

const Span = ({ open }) => (
  <span
    sx={{
      backgroundColor: "currentColor",
      display: "block",
      height: "1px",
      left: "calc(50% - 10px)",
      position: "absolute",
      transformOrigin: "center",
      transitionDuration: "86ms",
      transitionProperty: "background-color, opacity, transform",
      transitionTimingFunction: "ease-out",
      width: "20px",

      ":nth-of-type(1)": {
        top: "calc(50% - 8px)",
        transform: open && "translateY(7px) rotate(45deg)",
      },
      ":nth-of-type(2)": {
        top: "calc(50% - 1px)",
        opacity: open && "0",
      },
      ":nth-of-type(3)": {
        top: "calc(50% + 6px)",
        transform: open && "translateY(-7px) rotate(-45deg)",
      },
    }}
  ></span>
)

const HamburgerButton = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { lockMobileMenu } = useSiteMetadata();
  const { HamburgerTxt } = useSiteMetadata();
  return (
    <div
      aria-label="Toggle Menu"
      onClick={() => setIsNavOpen(!isNavOpen)}
      sx={{
        gridColumn: "2 / 3",
        gridRow: "1 / 2",
        alignSelf: "center",
        color: isNavOpen ? "header.textOpen" : "header.text",
        cursor: "pointer",
        display: ["block", null, lockMobileMenu ? null : "none", null, null],
        position: "relative",
        marginLeft: "auto",
        backgroundColor: "transparent",
        border: "none",
        variant: 'variants.header.hamburger',
        height: '60px',
        width: '60px',
        overflow: 'hidden'
      }}
    >
      <div sx={{width: '60px',  variant: 'variants.header.hamburger.icon'}}>
        <Span open={isNavOpen} />
        <Span open={isNavOpen} />
        <Span open={isNavOpen} />
      </div>
      {HamburgerTxt && (<div sx={{height: '60px', variant: 'variants.header.hamburger.txt'}}>{HamburgerTxt}</div>)}
    </div>
  )
}

export default HamburgerButton
