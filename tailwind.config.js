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
      black: "#171717",
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

