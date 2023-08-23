/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Lobster', 'cursive'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

