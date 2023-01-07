/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      mainLight: "#e5e5e5",
      black: "#2d2d2d",
      mainDark: "#093545",
      darkTransparentHighlight: "#7fcaff14",
      darkHighlight: "#224957",
      green: "#20DF7F",
      gray: "#888888",
      blue: "#55ACEE",
      red: "#FF5A5A",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
