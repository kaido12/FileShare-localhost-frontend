module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
       },
      colors: {
        zinc:{
          dark: '#23272a',
        },
        blue: {
          light: '#67e8f9',
          
        },
        stone: {
          dark: '#17191c',
          
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
};
