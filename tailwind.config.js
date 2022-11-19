/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#191D32",
        lightPrimary: "#e0e0e0",
        error: "#ef5350",
      },
    },
  },
  plugins: [],
};
