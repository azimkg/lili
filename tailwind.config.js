/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'popp': ['Poppins', 'sans-serif'],
      'dang': ['Dangrek', 'sans-serif'],
      'mons': ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

