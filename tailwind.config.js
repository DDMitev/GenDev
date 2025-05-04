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
        navy: {
          950: '#0A2463',
          900: '#0d2b6f',
          800: '#113682',
          700: '#154193',
          600: '#1a4ca5',
        },
        emerald: {
          950: '#064e40',
          900: '#065f4e',
          800: '#047857',
          700: '#00916e',
          600: '#00B894',
          500: '#10b981',
          400: '#3AAFA9',
          300: '#5ebaaa',
          200: '#a7f3d0',
          100: '#d1fae5',
        }
      }
    },
  },
  plugins: [],
}
