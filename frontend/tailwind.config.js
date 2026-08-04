/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        darker: '#0a0a0a',
        darkcard: '#1a1a1a',
        paper: '#F4F1EA',
        paperdark: '#EBE7DE',
        primary: '#FF3B00', // Fiery Vermillion Red (Kevin Luna theme signature)
        secondary: '#D93000',
        accent: '#FF5C26',
        graylight: '#999999',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(255, 59, 0, 0.4)',
        'glow-lg': '0 0 40px rgba(255, 59, 0, 0.6)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.35)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.35)',
        'paper-shadow': '0 10px 30px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

