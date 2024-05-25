/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        gethsemaneBlack: "#000",
      },
      animation: {
        spin: "spin 9s linear infinite",
      },
    },
  },
  plugins: [],
};
