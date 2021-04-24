module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-450': '#3068B2',
        'gray-550': '#45474D',
        'gray-350': '#C4C8D9'
      },
      screens: {
        'xs': '480px'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
