/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'spotify-green-700': '#1DB954',
        'spotify-green-500': '#1ED760',
        'spotify-green-600': '#1DB34F',
      },
    },
  },
  plugins: [],
};
