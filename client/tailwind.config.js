/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-primary": "#646CFF",
        "first-secondary": "#E8F0FE",
      },
    },
  },
  plugins: [],
};
