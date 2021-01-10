module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'green-btn': '#25B350',
      'green-btn-hover': '#187333'
     }),
    fontFamily: {
      'sans': ['Raleway', 'Sans-serif'],
      'sans2': ['Work Sans', 'Sans-serif'],
    },
    letterSpacing: {
      ultra: '0.2em',
     },
     screens: {
      'phones-pt': {'raw': 'only screen and (max-width: 767px) and (orientation: portrait)'},
      'phones': {'raw': 'only screen and (max-width: 767px)'},
      'desktop': {'raw': 'only screen and (min-width: 768px)'}
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
