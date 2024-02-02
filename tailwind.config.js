/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#FCFCFC",
      black: "#181818",
      primary: "#9a8866",
      transparent: "transparent",
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

