/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'craft-navy': '#1E3A5F',
        'craft-navy-light': '#2A4A73',
        'craft-navy-dark': '#0F1F3A',
        'craft-rust': '#C1633E',
        'craft-rust-light': '#D97850',
        'craft-rust-dark': '#A04E2E',
        'craft-sand': '#E8DCC8',
        'craft-sand-light': '#F5F0E5',
        'craft-sand-dark': '#D4C4A8',
        'craft-gray': '#5A6C7D',
        'craft-charcoal': '#2C3E50',
        'craft-beige': '#F9F6F1',
        'craft-olive': '#6B7F5E',
        'craft-copper': '#B87333',
      },
      fontFamily: {
        'work': ['Work Sans', 'sans-serif'],
        'roboto': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
