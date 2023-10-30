/** @type {import('tailwindcss').Config} */
const path = require('path');
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    path.resolve(
      __dirname,
      '../../packages/**/*.{html,ts,tsx}'
    ),
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
