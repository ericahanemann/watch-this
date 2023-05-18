/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        highlights: 'var(--color-highlights)',
      },
      backgroundImage: {
        'home-poster': "url('./src/assets/temp-home-poster.png')",
      }
    },
  },
  plugins: [],
}

