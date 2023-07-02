/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '375px',
      'sm' : '640px',
      'md' : '768px'
      
    },
    extend: {},
  },
  plugins: [],
}

