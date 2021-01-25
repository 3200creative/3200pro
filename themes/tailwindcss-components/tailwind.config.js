module.exports = {
  purge: "./src/components/**/*.js", "./src/pages/**/*.js",
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
