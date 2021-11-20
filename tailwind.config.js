module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  theme: {
    spacing: {
      '0.25': '2px',
      '0.5': '4px',
      '1': '8px',
      '1.5': '12px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '7': '56px',
      '8': '64px',
      '9': '72px',
      '10': '80px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: {
        DEFAULT: 'rgb(80, 212, 245)',
        hover: 'rgb(106, 218, 247)',
        light: 'rgba(80, 212, 245, 0.5)',
      },
      copy: {
        DEFAULT: 'rgb(41, 42, 44)',
        hover: 'rgb(57, 57, 57)',
        light: 'rgb(41, 42, 44, 0.5)',
      }
    },
    fontFamily: {
      'roboto': 'Roboto',
    }
  },
  corePlugins: {
    fontFamily: false,
    container: false,
  }
};
