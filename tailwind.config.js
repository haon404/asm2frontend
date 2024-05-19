/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#222323",
        "white": "#f0f6f0",
        "purple": "#ff4adc",
        "green": "#3dff98"
      },
    },
  },
  plugins: [],
}