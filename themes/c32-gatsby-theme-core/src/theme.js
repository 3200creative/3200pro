// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import prism from "@theme-ui/prism/presets/oceanic-next"

export default {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  ...tailwind,
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit", //An alternate font style if needed.
  },
  colors: {
    ...tailwind.colors,
    text: baseColors.gray[8],
    background: baseColors.gray[1], //Try "#954264",
    primary: baseColors.blue[7],
    secondary: baseColors.orange[7],
    accent: baseColors.orange[2],
    muted: baseColors.gray[2],

    header: {
      background: baseColors.gray[2],
      backgroundOpen: baseColors.blue[2],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsHover: baseColors.blue[7],
      iconsOpen: baseColors.gray[8],
    },

    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    modes: {
      dark: {
        text: '#fff',
        background: 'black',
        primary: '#0cf',
      }
    }
  },
  sizes: {
    ...tailwind.sizes,
    maxContentWidth: "1400px", // Sets the container size on larger screens, e.g. tablets and laptops
    logoWidthXS: "40px", // Logo width on extra small screens, up to 480px
    logoWidthS: "50px", // Logo width on small screens, 480px - 768px
    logoWidthM: "50px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "55px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "55px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "50px", // Logo height on small screens, 480px - 768px
    logoHeightM: "50px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "60px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "60px", // Logo height on extra large screens, above 1440px
  },
  styles: {
    ...tailwind.styles,
    root: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      color: "text",
      bg: "muted",
      fontSize: 1,
      p: 1,
    },
    pre: {
      ...prism,
      fontSize: 1,
      p: 3,
    },
    table: {
      width: "100%",
      my: 3,
      borderCollapse: "collapse",
    },
    th: {
      verticalAlign: "bottom",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "muted",
      backgroundColor: "muted",
      padding: 2,
      textAlign: "inherit",
    },
    td: {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "muted",
      verticalAlign: "top",
      padding: 2,
    },
  },
}
