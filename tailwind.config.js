/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5DD3',
        secondary: '#F5F5F5',
        grayLight: '#E4E4E4',
      },
    },
  },
  plugins: [],
}

