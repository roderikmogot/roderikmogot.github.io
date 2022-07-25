/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#100F0F',
        secondary: '#0F3D3E',
        tersier: '#E2DCC8',
        slight_gray: '#F1F1F1',
        experiences: '#ED6640',
        projects: '#6F5643',
        contact: '#ECE6C2'
      }
    },
  },
  plugins: [],
};
