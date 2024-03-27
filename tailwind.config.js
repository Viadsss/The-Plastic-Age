/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": {},
          "50%": { color: "rgb(251 113 133)" },
        },
      },
      animation: {
        flicker: "flicker 3s ease infinite",
      },
    },
  },
  plugins: [],
};
