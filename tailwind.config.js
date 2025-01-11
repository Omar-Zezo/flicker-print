/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-500": "#23B576",
        "black-500": "#020202",
        "black-400": "#333333",
        "black-300": "#545454",
        "black-200": "#8A8A8A",
        "black-100": "#B0B0B0",
        "gray" : "#E9EFF5",
        "gray-50" : "#E7EAF0",
        "field": "#F4F7F9",
        "header": "#333333",
        "green-500": "#23B576",
        "greenY-500": "#93C83D",
        "blue-500" : "#009DBA",
        "blue-100": "#B0E1EA",
        "blue-50": "#E6F5F8",
        "section-gray":"#F5F5F5"
      }
    },
    container: {
      center: true, 
      padding: '1rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}