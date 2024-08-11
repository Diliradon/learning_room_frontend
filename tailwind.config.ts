import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu Regular"],
        ubuntuBold: ["Ubuntu Bold"],
        ubuntuMedium: ["Ubuntu Medium"],
        ubuntuLight: ["Ubuntu Light"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '97.5': '24.375rem',
        '86': '21.5rem',
        '78': '19.5rem',
      },
      margin: {
        '18': '4.5rem',
      },
      padding: {
        '31.5': '7.875rem',
        '18.75': '4.68rem',
        '18': '4.5rem',
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1280px',
    },
    colors: {
      'transparent': '#ffffff00',
      primary: {
      100: '#F9E783',
      200: '#FED851',
      },
      secondary: {
      100: '#A6DCEF',
      200: '#77D99F',
      300: '#FDB7AA',
      400: '#D2ADE6',
      500: '#5FB7DF',
      600: '#32B763',
      700: '#FC846A',
      800: '#B47ACC',
      },
      gray: {
      100: '#4A4A4A',
      80: '#727272',
      60: '#A6A6A6',
      30: '#C1C1C1',
      20: '#D7D7D7',
      10: '#F1F1F1',
      0: '#FFFFFF',
      },
      error: '#FF8F7B',
      info: '#66C4E6',
      warning: '#FFD800',
      success: '#7AB74A',
      },
  },
  plugins: [],
};

export default config;
