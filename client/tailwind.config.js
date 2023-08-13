/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

