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
        // Main colors for Black & Yellow scheme
        'cyber-yellow': {
          50: '#FFFEF0',
          100: '#FFFDE0',
          200: '#FFF9B3',
          300: '#FFF486',
          400: '#FFEE59',
          500: '#FFE82C', // Primary yellow
          600: '#FADD00',
          700: '#DCBE00',
          800: '#AA9100',
          900: '#776600',
        },
        'midnight': {
          50: '#E0E0E0',
          100: '#C2C2C2',
          200: '#A3A3A3',
          300: '#858585',
          400: '#666666',
          500: '#484848',
          600: '#2A2A2A',
          700: '#1C1C1C',
          800: '#121212', // Primary black
          900: '#000000',
        },
        'accent-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // For convenience in styling
        'yellow': '#FFE82C',
        'black': '#121212',
      },
    },
  },
  plugins: [],
}
