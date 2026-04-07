/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0f5',
          100: '#d1e1eb',
          200: '#a3c3d7',
          300: '#75a5c3',
          400: '#4787af',
          500: '#2470a7', // Bleu principal
          600: '#1d5a85',
          700: '#264370', // Bleu foncé
          800: '#1e3456',
          900: '#16253c',
        },
        accent: {
          50: '#f0f9f3',
          100: '#e1f3e7',
          200: '#c3e7cf',
          300: '#a5dbb7',
          400: '#87cf9f',
          500: '#55a93d', // Vert principal
          600: '#448731',
          700: '#336525',
          800: '#224318',
          900: '#11220c',
        },
        blue: {
          dark: '#264370', // Bleu foncé
          DEFAULT: '#2470a7', // Bleu
          light: '#41abb4', // Bleu-vert
        },
        green: {
          DEFAULT: '#55a93d', // Vert
          yellow: '#bac823', // Vert-jaune
        },
        yellow: {
          DEFAULT: '#fae91c', // Jaune
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

