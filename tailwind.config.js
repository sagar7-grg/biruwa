const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#219653",
      },
      backgroundImage: (theme) => ({
        "header-image": "url('/images/header.jpg')",
        "card-background": "url('/images/card.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
