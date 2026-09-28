/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F6F1',
        sand: '#EEE9DF',
        ink: '#25231F',
        muted: '#77736B',
        gold: '#B89555',
        champagne: '#D8C18D',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cormorant', 'Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
