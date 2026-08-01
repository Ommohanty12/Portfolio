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
        darkcard: '#161618',
        primary: '#FF4500', // Dark Orange (OrangeRed)
        secondary: '#CC3700', // Darker variation
        accent: '#FF6333', // Lighter variation
        graylight: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 69, 0, 0.35)',
        'glow-lg': '0 0 35px rgba(255, 69, 0, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.35)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.35)',
      }
    },
  },
  plugins: [],
}

