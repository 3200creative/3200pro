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
    bs: '0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.33)',
    ms: '0 15px 30px -10px rgba(0,0,0,0.3), 0 9px 18px -9px rgba(0,0,0,0.33)',
  },
  colors: {
    ...tailwind.colors,
    text: '#000',
    border: 'black',
    headline: '#000',
    darkbg2: 'white',
    pOrange: '#FF8336',
    fmBlue: '#517487',
    tanD: '#D9C99D',
    tanL: '#E6E4D0',
    background: '#ffffff', //Try "#954264",
    background2: '#ffffff', //Try "#954264",
    primary: '#d8101e',
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
        background2: '#222222',
        border: 'white',
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
      p: {
        a: {
          color: 'primary',
          span: {
            color: 'white'
          }
        }
        
      }
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    a: {
      color: 'primary'
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
      lineHeight: '1',
      
    },
    h2: {
      color: 'headline',
      lineHeight: '1',
      fontSize: [3,3,5,5],
      a: {
        color: 'headline',
      }
    },
    h3: {
      color: 'headline',
      lineHeight: '1',
      a: {
        color: 'headline',
      }
    },
    h4: {
      fontSize: 3,
      color: 'headline',
      a: {
        color: 'headline',
      }
    }

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
  variants: {
    content: {
      H1: {
        textAlign: 'center',
        width: '100%'
      },
      h2: {
        textAlign: 'center',
        width: '100%'
      },
      h3: {
        textAlign: 'center',
        width: '100%'
      },
      h4: {
        textAlign: 'center',
        width: '100%'
      }
    },
    pagination: {
      mt: 5,
      a: {
        color: 'text'
      }
    },
    darkmodeicon: {
      top: '10px',
      right: '10px'
    },
    clearline: {
      borderBottom: '1px solid #ddd',
      width: '100%',
      clear: 'both',
      height: '1px',
      my: '10px',
      clear: 'both',
      float: 'left'
    },
    clear: {
      width: '100%',
      clear: 'both',
      height: '2rem',
    },
    button: {
      backgroundColor: 'background',
      borderWidth: '2px',
      borderColor: 'text',
      borderStyle: 'solid',
      px: 3,
      py: 2,
      borderRadius: '4px',
      transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
      color: 'text',
      '&:hover':{
        backgroundColor: 'text',
        color: 'background',
        transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
      },
    },
    header: {
      backgroundColor: 'background2',
      boxShadow: 'ms',
      wrapper: {
        display: ['block', 'flex', null, null],
        width: '100%'
      },
      hamburger: {
        right: ['50px', 'none', null, null],
        top: ['0px', 'none', null, null],
        position: ['absolute', 'none', null, null],
        marginRight: ['0px','40px', null, null],
        display: ['block',null, 'none', null]
      },
      nav: {
        backgroundColor: ['transparent', null, null, null],
        wrapper: {
          width: ['100vw', 'auto', null, null],
        },
        div: {
          clear: ['both', 'none', null, null]
        },
        a: {
          color: 'text',
          mt: 4,
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      },
    },
    nav: {
      mx: 3,
      item: {
        display: 'block',
        color: 'white',
        mx: 2,
      }
    },

    siteLogo: {
      width: '400px',
      height: 'auto',
    },
    footer: {
      fontSize: 1,
      ul: {
        display: 'flex',
        justifyContent: 'center',
        li: {
          listStyleType: 'none',
          mx: 2,
        }
      }
    },
    productFeed: {
      my: [3,5], py: [3,5]
    },
    postFeed: {
      my: [3,null,5, null], py: [3,null,5, null]
    }
  },
}
