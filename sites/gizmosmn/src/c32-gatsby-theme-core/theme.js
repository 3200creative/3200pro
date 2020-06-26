// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import prism from "@theme-ui/prism/presets/oceanic-next"

export default {
  useColorSchemeMediaQuery: true,
  ...tailwind,
  breakpoints: ["480px", "768px", "2024px", "2440px"],
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
    primary: baseColors.red[7],
    secondary: baseColors.orange[7],
    accent: baseColors.orange[2],
    muted: baseColors.gray[2],
    

    header: {
      background: baseColors.black,
      backgroundOpen: baseColors.black,
      text: baseColors.white,
      textOpen: baseColors.white,
      icons: baseColors.gray[6],
      iconsHover: baseColors.blue[7],
      iconsOpen: baseColors.gray[8],
    },

    footer: {
      background: baseColors.black,
      text: baseColors.white,
      links: '#333',
      icons: baseColors.gray[8],
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxContentWidth: "1000px", // Sets the container size on larger screens, e.g. tablets and laptops
    // logoWidthXS: "50%", // Logo width on extra small screens, up to 480px
    // logoWidthS: "30%", // Logo width on small screens, 480px - 768px
    // logoWidthM: "30%", // Logo width on medium screens, 768px - 1024px
    // logoWidthL: "30%",ss // Logo width on large screens, 1024px - 1440px
    // logoWidthXL: "30%", // Logo width on extra large screens, above 1440px
    logoHeightXS: "100vw", // Logo height on extra small screens, up to 480px
    logoHeightS: "5vw", // Logo height on small screens, 480px - 768px
    logoHeightM: "5vw", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "5vw", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "5vw", // Logo height on extra large screens, above 1440px
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
  variants: {
    whiteTextShadow: {
      textShadow: '1px 1px 6px rgba(0, 0, 0, 0.32)',
    },
    footer: {
      padding: 0,
      backgroundColor: 'background',
      color: '#999',
      a: {
        color: '#999',
      },
    },
    ctaButtons: {
      backgroundColor: 'primary',
      textAlign: 'center',
      borderRadius: '4px',
      a: {
        color: 'white',
        textAlign: 'center',
        padding: 4,
        textTransform: 'uppercase',
      },
    },
    showcaseFeed: {
      marginTop: 5,
      a: {
        color: 'black',
        fontSize: 1,
        textAlign: 'center',
      },
    },
    siteTitle: {
      fontSize: [4, null, 5, null, null],
    },
    main: {
      p: {
        a: {
          color: 'primary',
        },
      },
    },
  },
}
