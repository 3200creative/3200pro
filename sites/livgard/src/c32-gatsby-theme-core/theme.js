// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import prism from "@theme-ui/prism/presets/oceanic-next"

export default {
  useColorSchemeMediaQuery: true,
  ...tailwind,
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    siteTitle: "'lato', sans-serif", // Font for main site title
    navLinks: "'lato', sans-serif", // Font for the nav menu links
    alt: "'lato', sans-serif", //An alternate font style if needed.
  },
  colors: {
    ...tailwind.colors,
    text: '#4a494e',
    background: baseColors.white, //Try "#954264",
    primary: '#eeab9e',
    secondary: baseColors.orange[7],
    accent: baseColors.orange[2],
    muted: baseColors.gray[2],

    header: {
      background: baseColors.white,
      backgroundOpen: baseColors.white,
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsHover: baseColors.blue[7],
      iconsOpen: baseColors.gray[8],
    },

    footer: {
      background: baseColors.white,
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxContentWidth: "900px", // Sets the container size on larger screens, e.g. tablets and laptops
    // logoWidthXS: "50%", // Logo width on extra small screens, up to 480px
    // logoWidthS: "30%", // Logo width on small screens, 480px - 768px
    // logoWidthM: "30%", // Logo width on medium screens, 768px - 1024px
    // logoWidthL: "30%", // Logo width on large screens, 1024px - 1440px
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
    imageShadow: {
      boxShadow: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.33) !important',
    },
    whiteTextShadow: {
      textShadow: '1px 1px 6px rgba(0, 0, 0, 0.32)',
    },
    siteTitle: {
      fontSize: [4, null, 5, null, null],
    },
    fullWidth: {
      width: '100vw',
      marginLeft: '-50vw',
      left: '50%',
      position: 'relative',
    },
    hero1: {
      h1: {
        color: '#4a494e',
        a: {
          color: '#4a494e',
        },
      },
    },
    postPreview: {
      marginTop: ['20vh',null,null,'40vh'],
      width: "90vw",
      backgroundColor: '#d6e3dd',
      py: '40px',
      px: '5vw',
      
      "&:nth-of-type(even)": {
        img: {
          background: '#000000',
        },
        archiveImages: {
          display: 'none',
          background: '#000',
        },
      },
      p: {
        color: 'text',
        p: 0,
        m: 0,
      },
      img: {
        filter: 'grayscale(100%)',
        'mix-blend-mode': 'overlay',
      },
      h4: {
        fontSize: [4, null, 6, null, null],
        fontWeight: 800,
        textAlign: 'left',
        color: 'text',
        lineHeight: 1,
        m: 0,
      },
      overlay: {
        position: "relative",
        display: "grid",
        placeItems: "left",
        textAlign: 'left',
        overflow: 'hidden',
      },
      archiveImages: {
        position: 'absolute',
        overflow: 'hidden',
        opacity: '1',
        left: '20vw',
        width: ['80vw', null, '40vw', null, null],
        margin: '-10vw',
        variant: 'variants.imageShadow',
        background: '#ccc',
      },
    },
    standardWidth: {
      width: '100%'
    },
    navStyles: {
      marginRight: '100px',

    },
    navLinkStyles: {
      mx: 3,
      a: {
        textTransform: 'uppercase',
        fontWeight: 2,
        color: 'text',
      },
    },
    navSubLinkStyles: {
      a: {
        textTransform: 'uppercase',
        fontWeight: 2,
        fontSize: '16px',
        borderBottom: '1px solid primary',
      },
    },
  },
}
