/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cobalt: {
          DEFAULT: '#4A6FDC',
          light: '#6A8AE6',
          dark: '#3A5FC8',
          950: '#233572',
          900: '#2A3D85',
          800: '#324A99',
          700: '#3B57AC',
          600: '#4364C4',
          500: '#4A6FDC',
          400: '#6A8AE6',
          300: '#8BA4EF',
          200: '#ABBEF7',
          100: '#CCD9FC',
        },
        amber: {
          DEFAULT: '#F39C12',
          light: '#F7B541',
          dark: '#D68910',
          900: '#9A6307',
          800: '#B57509',
          700: '#D0870A',
          600: '#E08E0B',
          500: '#F39C12',
          400: '#F5AB35',
          300: '#F7B941',
          200: '#F9C969',
          100: '#FCE2BA',
        },
        slate: {
          DEFAULT: '#34495E',
          dark: '#2C3E50',
          950: '#0F2027',
          900: '#1A2530',
          800: '#203A43',
          700: '#2C3E50',
          600: '#34495E',
          500: '#3C556B',
          400: '#4A687F',
          300: '#587C94',
          200: '#7B97AA',
          100: '#B3C6D1',
        }
      }
    },
  },
  plugins: [],
}
