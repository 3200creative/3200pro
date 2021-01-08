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
    pOrange: '#FF8336',
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
  reviews:  {
    container: {
      borderTop: '1px solid #ddd',
    },
    singleReview: {
      border: '1px solid #ddd',
      padding: 5,
      my: 5,
      titleBlock: {
        display: 'flex',
        mb: 3,
      },
      title: {
        fontSize: 24,
        my: 0,
        mx: 2,
      },
      meta: {
        display: 'flex',
        fontSize: 16,
        div: {
          background: '#f5f5f5',
          padding: 2,
        },
      },
    },
  },
  archive: {
    singleItem: {
      padding: 2,
      borderRadius: 4,
      minHeight: '100%',
      boxShadow: 'shadowStyle1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      media: {
      },
      body: {
        flexGrow: '1',
      },
      footer: {
        display: 'flex',
        flex: '1 0 auto',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column',
      }, 
    },
  },
  contactNav: {
    nav: {
      display: 'block',
      background: 'transparent',
      position: 'absolute',
      top: '5px',
      right: 1,
      left: '70vw',
      margin: 'none',
      width: 'max-content',
      p: 0,
      a: {
        color: 'text',
        fontWeight: '400'
      }
    }
  },
  variants: {
    header: {
      background: 'transparent',
      wrapper: {
        height: 'auto !important'
      },
      hamburger: {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'pOrange',
        left: '40vw',
        top: '10px',
        position: 'fixed',
        width: '300px',
        height: '40px',
        top: 0,
        p: 1,
        icon: {
          display: 'relative',
          width: '30px',
          span: {
            left: 'auto !important',
            color: 'white',
            height: '3px',

          }
        },
        txt: {
          display: 'relative',
          clear: 'none',
          textTransform: 'uppercase',
          color: 'white',
        }
        
      },
      nav: {
        backgroundColor: 'pOrange',
        justifyContent: "space-between",
        position: 'fixed',
        zIndex: '99999',
        left: '40vw',
        alignItems: 'baseline',
        top: '30px',
        p: 4,
        a: {
          mr: 4,
          color: 'white',
          fontWeight: '800',
          div: {
            a: {
              fontWeight: '400'
            }
          }
        },
      },
      subnav: {
        display: 'block'
      },
    },
    siteContainer: {
      maxWidth: '1500px',
      margin: '0 auto',
    },
    starCount: {
      color: 'yellow'
    },
    subHeader: {
      marginTop: '100px',
      a: {
        color: 'white'
      },
    },
    subNavStyles: {
      float: 'left'
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
        color: 'white!important',
        backgroundColor: 'fmOrange',
        '&:nth-of-type(even)': {
          backgroundColor: 'tanL',
          color: 'fmBlue',
        },
      },
    },
    siteLogo: {
      width: '300px',
      height: 'auto',
    },
    shadow: {
      boxShadow: 'shadowStyle1',
    },
    heroBtns: {
      display: 'block',
      nav: {
        a: {
          color: 'text'
        }
      }
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
    navLinkStyles: {
      fontWeight: '400',
      textTransform: 'uppercase',
      fontSize: '16px',
      a: {
        fontWeight: '400',
        color: 'white',
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
