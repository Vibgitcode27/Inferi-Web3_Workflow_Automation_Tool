// tailwind.config.js
module.exports = {
  darkMode: "class", // Automatically uses system preferences for dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust according to your file structure
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
