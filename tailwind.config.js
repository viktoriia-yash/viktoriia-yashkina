/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mainFont: "Mulish",
      accentFont: "Bodoni Moda",
      headerFont: "Raleway",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        backgroundColor: "#F6F6F6",
        fontColor: "#191825",
        accentColor: "#9BB67C",
        celectionColor: "#FFD966",
      },
    },
  },
  plugins: [],
};
