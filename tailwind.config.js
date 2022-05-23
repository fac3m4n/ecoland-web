module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#A8E34B",
        "secondary-green": "#345901",
      },
      fontFamily: {
        londrina: ["Londrina Solid"],
        configmedium: ["Config Medium"],
        londrinaBlack: ["Londrina Solid Black"],
      },
    },
  },
  plugins: [],
};
