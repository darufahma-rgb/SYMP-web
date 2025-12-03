/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'symp-red': '#8A0202',
        'deep-red': '#600000',
        'highlight-red': '#A80909',
      },
    },
  },
  plugins: [],
};
