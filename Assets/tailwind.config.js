module.exports = {
  purge: [],
  theme: {
    colors: {
      platinum: '#DCE1DE',
      lightgreen: '#9CC5A1',
      green: '#49A078',
      blue: '#216869',
      darkgreen: '#1F2421',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {
      maxWidth: {
        '1/16': '6.25%',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
      },
      fontSize: {
        '7xl': '5rem'
      },
      borderWidth: {
        '1': '1px'
      },
      inset: {
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
      },
      opacity: {
        '90': '.9'
      },
      scale: {
        '25': '.25'
      },
      height: {
        'small': '25vh',
        'medium': '50vh',
        'large': '75.4vh'
      }
    },
  },
  variants: {
    margin: ['responsive', 'hover'],
  },
  plugins: [],
}
