/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/index.html",
  ],
  safelist: [
    'glass-effect',
    'icon-hover',
    'search-focus'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4285f4',
        secondary: '#34a853',
        accent: '#fbbc05',
        danger: '#ea4335',
        dark: 'rgba(0, 0, 0, 0.7)',
        light: 'rgba(255, 255, 255, 0.9)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}