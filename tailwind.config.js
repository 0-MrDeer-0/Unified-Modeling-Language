/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      black : ['IRANSansX-Black'],
      bold : ['IRANSansX-DemiBold'],
      regular : ['IRANSansX-Regular'],
    },
    fontWeight : { 
      /* To deactivate font weight utilities */ 
    },
    extend: {
      colors : {
        primary : '#4A72FF',
        secondary : '#0C1B4D',
        "alic-blue" : '#F4F7FF',
      },
      container : {
        center : true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },

    },
  },
  plugins: [],
}

