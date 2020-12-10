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
    screens: {
      xs: { min: "375px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
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
