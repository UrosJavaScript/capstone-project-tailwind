// tailwind.config.js

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3056D3",
        darkBlue: "#090E34",
        borderOpacity: "rgba(255, 255, 255, 0.34)",
        textBlack: "#212B36",
        secondTextBlack: "#2E2E2E",
        pColor: "#637381",
        border: "#EBEBEB",
        red: "#FC2626",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"],
      },
    },
  },
  variants: {},
  plugins: [],
};
