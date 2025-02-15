/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#060317",
        "Soft-Cream": "#FDF5E6",
        "Rose-Gold": "#B76E79",
        "Dark-Gray": "#666666",
        "Light-Gray": "#CCCCCC",
        "Soft-Cream2": "#FBECD5",
        "Soft-Grey": "#F6EDDE",
      },
      fontFamily: {
        dancing: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
