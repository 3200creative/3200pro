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
    body: "'lato', sans-serif",
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
      primary: '#eeab9e',
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
      a: {
        color: 'text',
      },
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
    imageOverlay: {
      backgroundColor: '#ccc',
      filter: 'grayscale(0%)', 
            'mix-blend-mode': 'overlay',
            '&:hover': {
            filter: 'grayscale(0%)', 
            'mix-blend-mode': 'overlay',
            transition: '-webkit-filter ease-in-out 1s, filter ease-in-out 1s',
            },
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
        textShadow: 'none',
        a: {
          color: '#4a494e',
        },
      },
    },
    postPreview: {
      marginTop: ['10vh',null,null, null],
      width: "700px",
      maxWidth: '90vw',
      mx: 'auto',
      backgroundColor: '#d6e3dd',
      ':first-of-type': {
        marginTop: '80px',
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
      a: {
          img: {
            filter: 'grayscale(0%)', 
            'mix-blend-mode': 'overlay',
            '&:hover': {
            filter: 'grayscale(0%)', 
            'mix-blend-mode': 'overlay',
            transition: '-webkit-filter ease-in-out 1s, filter ease-in-out 1s',
            },
          }, 
      },
      h4: {
        fontSize: [4, null, 6, null, null],
        fontWeight: 800,
        textAlign: 'left',
        color: 'text',
        lineHeight: 1,
        m: 4,
      },
      description: {
        mx: 4,
      },
      overlay: {
        position: "relative",
        display: "grid",
        placeItems: "left",
        textAlign: 'left',
        overflow: 'hidden',
      },
      archiveImages: {
        marginLeft: '-10vw',
        maxWidth: '100%',
        width: '500px',
        overflow: 'hidden',
        opacity: '1',
        variant: 'variants.imageShadow',
        background: '#ccc',
        
      },
      pattern: {
        height: '40px',
        overflow: 'hidden',
        opacity: '.3',
        '&:first-of-type': {
          marginBottom: 4
        },
        '&:last-of-type': {
          marginTop: 4
        },
      }
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
        fontSize: 1,
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
    footer: {
      color: '#999',
      fontSize: '14px',
      a: {
        color: '#999',
      },
    },
    generalButton: {
      padding: ['20px'],
        background: ['white'],
        display: 'inline-block',
        width: 'max-content',
        maxWidth: '90%',
        float: 'right',
        textAlign: 'center',
        margin: '0 auto',
        transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
        p: 3,
        '&:hover': {
          backgroundColor: 'primary',   
          transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',   
        },
        a: {
          fontSize:['14px','18px']
        }
    },
    ctaButtons: {
      paddingBottom: '40px',
      a: {
        background: '#d6e3dd',
        display: 'block',
        p: 3,
        '&:hover': {
          backgroundColor: 'primary',
        },
      },
    },
  },
}
