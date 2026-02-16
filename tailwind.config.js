/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0f766e', 
          700: '#0d655d', 
        },
        dark: {
          800: '#1f2937',
          900: '#111827',
        }
      }
    }
  },
  plugins: [],
}

// npx tailwindcss -i assets/css/input.css -o assets/css/style.min.css --minify