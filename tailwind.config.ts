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
        sans: ['Ubuntu', 'ui-sans-serif', 'system-ui'],
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
      'text/color': '#0F0F10',
      'primary/100': '#111111',
      'primary/200': '#FED851',
      'secondary/100': '#A6DCEF',
      'secondary/200': '#77D99F',
      'secondary/300': '#FDB7AA',
      'secondary/400': '#D2ADE6',
      'grey/100': '#4A4A4A',
      'grey/80': '#727272',
      'grey/60': '#A6A6A6',
      'grey/30': '#C1C1C1',
      'grey/20': '#D7D7D7',
      'grey/10': '#F1F1F1',
      'grey/0': '#FFFFFF',
      'error-color': '#FF8F7B',
      'info-color': '#66C4E6',
      'warning-color': '#FFD800',
      'success-color': '#60DC93',
    },
  },
  plugins: [],
};

export default config;
