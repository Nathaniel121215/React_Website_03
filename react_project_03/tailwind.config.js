/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
