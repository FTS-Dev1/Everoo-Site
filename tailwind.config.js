const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        lightPink: "#F5F5F5",
        yellow: "#FCD117",
        lightY: "#FFF5C9",
        grey: "#566476",
        lightGrey: "#ECECEC",
        green: '#5E9894'
      },
      boxShadow: {
        custom: '4.474102973937988px 8.948205947875977px 17.896411895751953px 0px #00000040',
      },
    },
  },
  plugins: [],
}

