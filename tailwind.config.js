/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#040F16",
        secondary: "#2554D7",
        accent: "#53D3D1"
      },
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [],
}