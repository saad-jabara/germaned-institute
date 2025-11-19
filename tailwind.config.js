/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'german-black': '#000000',
        'german-red': '#DD0000',
        'german-gold': '#FFCE00',
      },
    },
  },
  plugins: [],
}
