/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1a1a1a',
        'paper-white': '#f2efea',
        'shangmei-red': '#991b1b',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
      },
    },
  },
  plugins: [],
}
