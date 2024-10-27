/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "4rem",
        "2xl": "4rem",
      },
      screens: {
        "2xl": "1330px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
    },
    extend: {
      fontFamily: {
        ginter: ["Ginter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
