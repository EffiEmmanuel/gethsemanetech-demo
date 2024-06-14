/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        gethsemaneBlack: "#000",
        gethsemaneRed: "#ED2A6C",
      },
      backgroundColor: {
        gethsemaneBlack: "#000",
        gethsemaneRed: "#ED2A6C",
      },
      borderColor: {
        gethsemaneBlack: "#000",
        gethsemaneRed: "#ED2A6C",
      },
      animation: {
        spin: "spin 9s linear infinite",
      },
      fontFamily: {
        usual: "Usual",
        matter: "Matter",
      },
    },
  },
  plugins: [],
};
