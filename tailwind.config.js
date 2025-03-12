/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#1E3A8A",
        "amber-pop": "#F59E0B",
        "dark-slate": "#0F172A",
        "light-gray": "#F1F5F9",
      },
    },
  },
  plugins: [],
};