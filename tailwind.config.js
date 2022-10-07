const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      height: {
        chat: 'calc(100vh - 64px - 96px - 16px)',
      },
      maxWidth: {
        container: '1320px',
        heroText: '672px',
      },
      minHeight: {
        hero: '600px',
        textarea: '300px',
      },
      width: {
        'off-canvas': '300px',
      },
    },
  },
  plugins: [],
};
