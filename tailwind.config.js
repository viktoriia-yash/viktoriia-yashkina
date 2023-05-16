/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        accentColor: "#E8A0BF",
        headerColor: "#BA90C6",
        celectionColor: "#C0DBEA",
      },
    },
  },
  plugins: [],
};
