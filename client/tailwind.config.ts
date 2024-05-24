/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#fc466b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
