/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
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
