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
    text: '#4a494e',
    headline: '#000',
    darkbg2: 'white',
    background: baseColors.white, //Try "#954264",
    primary: '#FF00FF',
    light: '#999',
    secondary: baseColors.black,
    accent: baseColors.orange[2],
    muted: baseColors.gray[2],

    header: {
      background: 'transparent',
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
    siteLogo: {
      width: '100px',
      height: 'auto',
    },
    shadow: {
      boxShadow: 'shadowStyle1',
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
    landingPage: {
      marginTop: '10vw',
      h1: {
        textAlign: 'left',
        width:  ['90%', null, '500px'],
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
