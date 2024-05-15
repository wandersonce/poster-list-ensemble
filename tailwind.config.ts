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
      'og-body': '#A5D7E8',
      'dark-text': '#576CBC',
      'dark-bg': '#19376D',
      'dark-body': '#0B2447',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
