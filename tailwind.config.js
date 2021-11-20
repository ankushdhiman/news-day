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
    },
  },
  corePlugins: {
    fontFamily: false,
    container: false,
  }
};
