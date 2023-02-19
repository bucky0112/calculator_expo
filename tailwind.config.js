/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-btn": "#333333",
        "secondary-btn": "#a6a6a6",
        "accent-btn": "#ffc107",
      }
    },
  },
  plugins: [],
}
