/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-heroBg',
    'text-heroText',
    'bg-primary',
    'text-primaryText',
  ],
  theme: {
    extend: {
      colors: {
        heroBg: '#0d3855',/* ✅ azul oscuro fondo */ 
        heroText: '#ff553f',/* ✅ arcilla para letra */ 
        primary: '#A4A3F5',
        primaryText: '#132d46',
        rojoletra: '#F44336'
      },
    },
  },
  plugins: [],
};

