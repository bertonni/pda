module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      backgroundImage: theme => ({
        'rom-header': "url('/images/roma_bg.png')",
        'int-header': "url('/images/inter_bg.png')",
        'mil-header': "url('/images/milan_bg.png')",
        'juv-header': "url('/images/juventus_bg.png')",
        'field': "url('/images/stadium.jpg')",
        'white-field': "url('/images/white_field.svg')",
        'texture': "url('/images/bg_texture.png')",
        'texture-svg': "url('/images/bg_texture.svg')",
        'lineup': "url('/images/campo.png')"
      }),
      colors: {
        'gray-150': '#E9EAF5',
        'gray-350': '#C4C8D9',
        'gray-550': '#45474D',
        'blue-450': '#3068B2',
        'inter-blue': '#1266AB',
        'black': '#030000',
        'roma-red': '#8E001C',
        'roma-yellow': '#FFB300',
        'milan-red': '#C90C0F',
      },
      screens: {
        'xs': '480px'
      },
      borderWidth: {
        '3': '3px'
      },
      minWidth: {
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '24': '6rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem'
      },
      height: {
        'inherit': 'inherit'
      },
      minHeight: {
        '1': '0.25rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6.5rem',
        '25': '6.75rem'
      },
      maxHeight: {
        '94': '23.5rem',
        '95': '23.75rem',
        '109': '27.25rem',
        '110': '27.50rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
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
      },
      zIndex: {
        '10-': '-10',
        '20-': '-20',
        '30-': '-30',
        '40-': '-40',
        '50-': '-50',
        '100-': '-100',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
