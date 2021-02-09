// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: "./src/components/**/*.js", "./src/pages/**/*.js",
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
