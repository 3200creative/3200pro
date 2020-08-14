// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
/** @jsx jsx */
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import prism from "@theme-ui/prism/presets/oceanic-next"

export default {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: false,
  ...tailwind,
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    siteTitle: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif', // Font for main site title
    navLinks: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif', // Font for the nav menu links
    alt: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif', //An alternate font style if needed.
  },
  shadows: {
    shadowStyle1: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.33)',
  },
  colors: {
    ...tailwind.colors,
    text: '#444444',
    headline: '#000',
    darkbg2: 'white',
    fmOrange: '#C7664F',
    fmBlue: '#517487',
    tanD: '#D9C99D',
    tanL: '#E6E4D0',
    background: baseColors.white, //Try "#954264",
    primary: '#FF00FF',
    light: '#999',
    secondary: baseColors.black,
    accent: baseColors.orange[2],
    muted: baseColors.gray[2],

    header: {
      background: '#C7664F',
      backgroundOpen: 'white',
      text: 'text',
      textOpen: 'text',
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
        headline: '#fff',
        background: '#000',
        primary: '#0cf',
        darkbg2: '#fff',
        h1: {
          color: 'white'
        },
        header: {
          backgroundOpen: 'black',
          textOpen: 'white',
          text: 'white'
        }
      }
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
      color: 'headline',
      lineHeight: '1'
    },
    h2: {
      color: 'headline',
      lineHeight: '1'
    },
    h3: {
      color: 'headline',
      lineHeight: '1'
    },
  },
  variants: {
    siteContainer: {
      maxWidth: '1500px',
      margin: '0 auto',
      boxShadow: 'shadowStyle1'
    },
    orangeBtn: {
      background: 'fmOrange',
      boxShadow: 'shadowStyle1'
    },
    contentContainer: {
      maxWidth: '100%',
      p: 0,
    },
    homeLeft: {
      backgroundColor: 'fmOrange',
      my: 2,
      h2: {
        textAlign: 'center'
      }

    },
    homeRight: {
      backgroundColor: 'fmBlue',
      my: 2,
      h2: {
        textAlign: 'center'
      },
      a:{
        display: 'block',
        clear: 'both',
        mx: 'auto',
        maxWidth: '400px',
        my: 4,
        py: 4,
        backgroundColor: 'fmOrange',
        '&:nth-of-type(even)': {
          backgroundColor: 'tanL',
        },
      },
    },
    siteLogo: {
      width: '100px',
      height: 'auto',
    },
    shadow: {
      boxShadow: 'shadowStyle1',
    },
    heroBtns: {
      display: 'block'
    },
    ghostbutton: {
      backgroundColor: 'background',
      color: 'headline',
      borderWidth: '1px',
      borderColor: 'headline',
      boxShadow: 'none',
      p: 2,
      transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'headline',
        color: 'background',
        transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
      }

    },
    clearline: {
      width: '100%',
      backgroundColor: 'light',
      height: '1px',
      my: 5
    },
    postPreview: {
      my: [6],
      a: {
        color: 'text'
      },
      archiveImages: {
        backgroundColor: 'darkbg2',
        
        boxShadow: 'shadowStyle1',
      }
    },
    navLinkStyles: {
      fontWeight: '400',
      textTransform: 'uppercase',
      fontSize: '14px',
      a: {
        fontWeight: '400',
        color: 'text',
        mx: 3
      }
    },
    darkmodeicon: {
      top: [null, null,'10px'],
      right: ['20px', '40px'],
      bottom: ['10px', 'none'],
      position: ['fixed', null, 'absolute']
    },
    navStyles: {
      marginRight: '60px'
    },
    gist: {
      iframe: {
        a: {
          display: 'none'
        }
      }
    },
    footer: {
      fontSize: '12px',
      color: 'light',
      a: {
        color: 'light'
      },
      ul: {
        flexDirection: 'row',
        display: 'flex',
        listStyleType: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        li: {
          p: 2
        }
      }
    },
    buttonBlock: {
      a: {
        backgroundColor: 'fmOrange',
        color: 'white',
        px: 4,
        py: 3,
        borderRadius: 4,
        textTransform: 'uppercase'
      },
    },
    homepage: {
      width: '100%',
      wrapper: {
        width: '90% !important',
        mx: 'auto'
      },

      h1: {
        textAlign: 'left',
        my: 4,
        color: 'headline',
        lineHeight: '1'
      },
      h2: {
        color: 'headline',
        lineHeight: '1'
      },
      h3: {
        color: 'headline',
        lineHeight: '1'
      },
      h4: {
        color: 'headline',
        lineHeight: '1'
      },
    },
    standardPage: {
      marginTop: '10vw',
      h1: {
        textAlign: 'left',
        width:  ['90%', null, '900px'],
        my: 4,
        color: 'headline',
        lineHeight: '1'
      },
      h2: {
        color: 'headline',
        lineHeight: '1'
      },
      h3: {
        color: 'headline',
        lineHeight: '1'
      },
      h4: {
        color: 'headline',
        lineHeight: '1'
      },
    },
  },
}
