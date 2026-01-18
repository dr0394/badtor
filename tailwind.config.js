/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tor-teal': '#00A8E8',
        'tor-teal-light': '#00C4FF',
        'tor-teal-dark': '#0088BB',
        'tor-beige': '#F5F1E8',
        'tor-gray': '#718096',
        'tor-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
};
