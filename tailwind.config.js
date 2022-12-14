// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./resources/views/**/*.edge', './resources/assets/ts/**/*.ts'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: colors.teal,
      darkblue: colors.blueGray,
    },
  },
}
