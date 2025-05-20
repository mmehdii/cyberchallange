/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1980e6',
        secondary: '#e7edf3',
        dark: '#0e141b',
        muted: '#4e7397',
        background: {
          DEFAULT: '#f8fafc', // slate-50
        },
      },
      fontFamily: {
        sans: ['Manrope', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
        require('@tailwindcss/aspect-ratio'),

  ],
}