/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sam': {
          primary: '#0A5C36',      /* Vert foret puissant */
          secondary: '#1B8C4A',     /* Vert vif */
          accent: '#2A9D8F',        /* Vert menthe */
          warm: '#E9C46A',          /* Jaune dore pour accents */
          dark: '#1a2e2a',          /* Vert tres fonce */
          light: '#E9F5E8',         /* Vert clair */
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}