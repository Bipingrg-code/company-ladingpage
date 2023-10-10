export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    colors: {
      primaryDark: "#283a5ae6",
      primaryLight: "#f3f5fa",
      secondaryDark: "#37517e",
      secondaryLight: "#f3f5fa",
      primaryBlue: "#47b2e4",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
