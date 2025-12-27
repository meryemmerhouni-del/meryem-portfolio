/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ← AJOUTE CETTE LIGNE
  theme: {
    extend: {
      colors: {
        // Tu peux ajouter des couleurs personnalisées pour dark mode
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#f1f5f9',
          border: '#334155'
        }
      },
      animation: {
        'theme-toggle': 'themeToggle 0.3s ease-in-out',
      },
      keyframes: {
        themeToggle: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};