import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      'og-body': '#F2613F',
      'dark-text': '#9B3922',
      'dark-bg': '#481E14',
      'dark-body': '#0C0C0C',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
