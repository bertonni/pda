module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        'gray-150': '#E9EAF5',
        'gray-350': '#C4C8D9',
        'gray-550': '#45474D',
        'blue-450': '#3068B2'
      },
      screens: {
        'xs': '480px'
      },
      borderWidth: {
        '3': '3px'
      },
      minWidth: {
        '2': '0.5rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem'
      },
      height: {
        'inherit': 'inherit'
      },
      minHeight: {
        '1': '0.25rem'
      },
      maxHeight: {
        '109': '27.25rem'
      },
      flexGrow: {
        '2': 2
      },
      fontSize: {
        '2xs' : '0.625rem'
      },
      fontFamily: {
        'roboto': 'Roboto Mono',
        'montserrat': 'Montserrat'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
