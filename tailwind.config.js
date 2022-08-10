/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#304769",
          400: "#00F0FF"
        },
        gray: {
          700: "rgba(217, 217, 217, 0.2)"
        },
      },
    },
  },
  plugins: [],
}
