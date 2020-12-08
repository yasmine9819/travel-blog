const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
    },
    fontFamily: {
      logo: ["Brush Script Std"],
      title: ["Book Antiqua"],
    },
    extend: {},
  },
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
    },
  },
  plugins: [],
};
