/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Black': '#303031',
        'Gray': "#66645E",
        'Green': '#71A894',
        'LightGold': '#F3F0EA',
        'White': '#FFFFFF',
        'Yellow': '#F5C64F',
        'LightGray': '#F9F9F9',
      }
    },
  },
  plugins: [],
}

