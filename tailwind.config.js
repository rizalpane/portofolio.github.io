/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container:{
      padding: '5rem',
    },
    darkMode: 'class',
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

