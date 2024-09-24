module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        partageGreen: '#C5F801',
        partageOrange: '#FC5600',
        partageCream: '#E1EED6',
        partagePurple: '#A486BD',
        partageDeepPurple: '#6C01CD',
        backgroundDark: '#1a1a1a', // Dark grey, not pure black
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}