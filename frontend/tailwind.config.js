/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        darker: '#0a0a0a',
        primary: '#FF4500', // Dark Orange (OrangeRed)
        secondary: '#CC3700', // Darker variation
        accent: '#FF6333', // Lighter variation
        graylight: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 69, 0, 0.4)',
        'glow-lg': '0 0 25px rgba(255, 69, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
