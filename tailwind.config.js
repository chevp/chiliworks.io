/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chili: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#e63946',
          600: '#c81d25',
          700: '#a4161a',
          800: '#7a0a0a',
          900: '#3d0000',
        },
        ink: {
          900: '#0f0f10',
          800: '#1a1a1c',
          700: '#2a2a2d',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
