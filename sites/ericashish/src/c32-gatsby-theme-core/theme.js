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
    body:  '-apple-system, system-ui, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif !important',
    siteTitle: "inherit", // Font for main site title
    navLinks: '-apple-system, system-ui, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif !important', // Font for the nav menu links
    alt: "inherit", //An alternate font style if needed.
    header: '"Merriweather",Georgia,Serif',
  },
  colors: {
    ...tailwind.colors,
    text: baseColors.black,
    background: '#fafafa', //Try "#954264",
    primary: baseColors.blue[7],
    secondary: baseColors.orange[7],
    accent: baseColors.orange[2],
    grayTxt: '#73737D',
    lightTxt: '#73737D',
    muted: baseColors.gray[2],

    header: {
      background: baseColors.gray[2],
      backgroundOpen: baseColors.blue[2],
      text: baseColors.gray[8],
      textOpen: 'grayTxt',
      textClosed: '#73737D',
      icons: baseColors.gray[6],
      iconsHover: baseColors.blue[7],
      iconsOpen: baseColors.gray[8],
    },

    footer: {
      background: 'transparent',
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        transition: 'all 0.25s ease-in-out-quad',
        shadow: {
          boxShadow: '0 30px 60px -10px rgba(255,255,255,0.3), 0 18px 36px -18px rgba(255,255,255,0.33) !important',
        },
      }
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxContentWidth: "1220px", // Sets the container size on larger screens, e.g. tablets and laptops
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
  weights: {
    headingWeight: "600",
    navigation: "300",
  },
  borderRads: {
    generalImagesBorderRadius: 6,
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
      boxShadow: 'inset 0px -600px 500px -300px rgba(41,44,52,.15)',
      transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
      
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
    h1: {
      fontWeight: 'headingWeight',
      fontFamily: '"Merriweather",Georgia,Serif',
      maxWidth: '750px',
      margin: '0 auto',
      width: '900px',
      wordBreak: 'keep-all',
      color: 'text',
      fontSize: '48px',
      marginBottom: '25px',
      fontWeight: 'bold',
      lineHeight: '1.32',
    },
    h2: {
      fontWeight: 'headingWeight',
    },
    h3: {
      fontWeight: 'headingWeight',
    },
    h4: {
      fontWeight: 'headingWeight',
    },
    img: {
     boxShadow: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.33) !important',
    },

  },
  variants: {
    shadow: {
      boxShadow: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.33) !important',
    },
    siteTitle: {
      fontSize: [4, null, 5, null, null],
    },
    innerBoxShadow: {
      boxShadow: 'inset 0px -200px 300px -200px rgba(221,221,221,1)',
    },
    homePreview: {
      display: 'none',
      img: {
        display: 'none',
      },
    },
    postContainer: {
      width: '750px',
      header: {
        my: 4,
      },
      img: {
        boxShadow: 'none',
        borderRadius: 'generalImagesBorderRadius',
      },
      video: {
        borderRadius: 6,
        overflow: 'hidden',
      },
      iframe: {
        boxShadow: 'none',
        borderRadius: 'generalImagesBorderRadius',
      },
    },
    postDate: {
      color: 'lightTxt',
      fontSize: 1,
      opacity: '.33',
      mb: 4
    },
    articleToggle: {
      width: '100%',
      marginBottom: '40px',
      textAlign: 'right',
      display: 'block',
      position: 'relative',
      zIndex: '999999'
    },
    archiveLayout: {
      outline: 'none',
      background: 'transparent',
      borderRadius: '100px',
      padding: '10px',
      transition: 'all 0.5s ease-in-out-quad',
      '&:hover': {
        background: '#f5f5f5',
        borderRadius: '100px',
        padding: '10px',
        transition: 'all 0.5s ease-in-out-quad'
      },
      '&:active': {
        outline: 'none'
      },
    },
    landingPage: {
      h1: {
        width: '100%',
        maxWidth: '100%',
        fontFamily: 'body',
        fontWeight: '600'
      }
    },
    footer: {
      textAlign: 'left',
      width: 'maxContentWidth',
      margin: '0 auto',
      color: 'lightTxt',
      fontSize: 1,
      a: {
        color: 'lightTxt'
      }
    },
    smallAuthorBlock: {
      p: {
        padding: '0',
        margin: '0'
      }
    },
    navLinkStyles: {
      
    },
    layouts: {
      singlePages: {
        tea: {

        }
      }
    }
  },
}
