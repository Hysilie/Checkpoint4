/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-white": "#eee",
        "main-dark": "#333",
      },
      fontFamily: {
        serif: "Gupter",
        sans: "Hind Vadodara",
      },
    },
  },
  plugins: [],
};
