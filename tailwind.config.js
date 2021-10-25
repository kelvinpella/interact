// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      textColor: {
        greyish: "#707070",
        33: "#333333",
        fc: "#fcfafa",
        "2e": "#2e2d2d",
        f8: "#f8f7f7",
      },
      borderColor: {
        greyish: "#707070",
        borderHover: "#484f4f",
      },
      backgroundColor: {
        greyish: "#f2f2f266",
        whitish: "#f3f3f3",
        d8: "#d8d5d5",
        de: "#de354c",
        f8: "#f83650",
        70: "#707070",
        81: "#818181",
      },
      backgroundImage: {},
      width: {
        em: "1em",
      },
      height: {
        em: "1em",
      },
      gridTemplateColumns: {
        2: "repeat(2, auto)",
        4: "repeat(4, auto)",
      },
      gridTemplateRows: {
        5: "repeat(5, auto)",
        4: "repeat(4, auto)",
      },
      borderRadius: {
        circle: "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
