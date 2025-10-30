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
    'bg-colorfondo'
  ],
  theme: {
    extend: {
      colors: {
        heroBg: '#152c59ff',/* ✅ azul oscuro fondo */ 
        heroText: '#2980e7',/* ✅ arcilla para letra */ 
        primary: '#02dba6',
        primaryText: '#132d46',
        rojoletra: '#02dba6',
        colorfondo: '#ffffff',
      },
    },
  },
  plugins: [],
};

