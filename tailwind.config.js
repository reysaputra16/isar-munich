/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'darkBlue': '#2B3467',
        'lightBlue': '#727BAD',
        'brokenWhite': '#FCFFE7',
        'pinkRed': '#E33061',
        'neonGreen': '#D8F764',
      }
    },
  },
  plugins: [],
}