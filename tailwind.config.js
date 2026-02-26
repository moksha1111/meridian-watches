/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:     { DEFAULT: '#C9A84C', light: '#E8C97A', pale: '#F5EDD8' },
        dark:     { DEFAULT: '#0a0a0a', card: '#111111', surface: '#1a1a1a', border: '#2a2a2a' },
        platinum: { DEFAULT: '#E8E8E8', dim: '#A0A0A0' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 40px rgba(201,168,76,0.12)',
        card: '0 4px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
