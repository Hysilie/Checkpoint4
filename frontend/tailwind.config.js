/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        "main-white": "#eee",
        "main-dark": "#333",
        "second-dark": "#33333397",
      },
      fontFamily: {
        serif: "Gupter",
        sans: "Hind Vadodara",
      },
    },
  },
  plugins: [],
};
