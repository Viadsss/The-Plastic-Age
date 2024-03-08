/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libreBodoni: ["Libre Bodoni", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        madimiOne: ["Madimi One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
