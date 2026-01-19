/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'clean-aqua': '#00C9D4',
        'clean-aqua-light': '#5DE2E7',
        'clean-aqua-dark': '#008B93',
        'clean-blue': '#0077B6',
        'clean-blue-light': '#0096C7',
        'clean-blue-dark': '#023E8A',
        'clean-navy': '#1A1F3A',
        'clean-sky': '#E6F7F9',
        'clean-ice': '#F0FBFC',
        'clean-white': '#FFFFFF',
        'clean-gray': '#5A6C7D',
        'clean-silver': '#E8EDF2',
        'clean-mint': '#A8E6CF',
      },
      fontFamily: {
        'work': ['Work Sans', 'sans-serif'],
        'roboto': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
