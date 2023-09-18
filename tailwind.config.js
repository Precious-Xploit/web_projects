/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
