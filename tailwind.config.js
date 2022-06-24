/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        gradientShadow: `url('src/assets/gradient-shadow.svg')`,
      },
      boxShadow: {
        gradientShadow: "inset 0px -150px 115px -100px #000000"
      },
      colors: {
        gray: {
          100: "#E1E1E6",
          200: "#A8A8B3",
          300: "#8D8D99",
          500: "#323238",
          600: "#808191",
          700: "#121221",
          900: "#1F1D2B",
        },
      },
    },
  },
  plugins: [],
};
