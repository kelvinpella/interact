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
      },
      fontSize: {
        // 85: "5.313rem",
        // 65: "4.063rem",
        // 10: "0.625rem",
        // 17: "1.063rem",
        // 18: "1.125rem",
        // 14: "0.875rem",
        // 12: "0.75rem",
        // 13: "0.813rem",
        // 31: "1.938rem",
        // 45: "2.813rem",
      },
      lineHeight: {
        // 75: "4.688rem",
        // 63: "3.938rem",
        // 14: "0.875rem",
        // 18: "1.125rem",
        // 23: "1.438rem",
        // 22: "1.375rem",
        // 25: "1.563rem",
        // 27: "1.688rem",
        // 35: "2.188rem",
      },
      letterSpacing: {
        // 0.1: "0.1em",
        // 0.3: "0.3em",
        // 0.4: "0.4em",
        // 0.017: "0.001rem",
      },
      borderColor: {
        greyish: "#707070",
      },
      backgroundColor: {
        greyish: "#f2f2f266",
        whitish: "#f3f3f3",
        d8: "#d8d5d5",
        de: "#de354c",
        f8: "#f83650",
      },
      backgroundImage: {
        // "about-cover":
        //   "linear-gradient(#000000, rgba(0, 0, 0, 0)), url('/src/assets/About/cover.png')",
        // "sale-cover":
        //   "linear-gradient(rgba(26, 26, 36, 0.9), rgba(26, 26, 36, 0.9)), url('/src/assets/SaleDate/salecover.svg')",
      },
      maxHeight: {
        // 28: "28.9rem",
      },
      minWidth: {
        // 90: "90%",
      },
      top: {
        // 45: "45%",
      },
      left: {
        // 8: "8%",
      },
      right: {
        // 10: "10%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
