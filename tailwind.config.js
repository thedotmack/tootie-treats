/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      colors: {
        night: '#0b0f19',
        lavender: {
          100: '#F4E8FF',
          200: '#E3CCFF',
          400: '#C49CFF',
          500: '#A978FF',
          600: '#7D4FE7'
        },
        blush: '#FFD1DC',
        sky: '#C6E2FF',
        mint: '#D9FFDB'
      },
      boxShadow: {
        glow: '0 0 35px rgba(164, 123, 255, 0.45)'
      },
      backgroundImage: {
        'grid-glow': "radial-gradient(circle at 20% 20%, rgba(196, 156, 255, 0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(255, 209, 220, 0.2), transparent 55%), radial-gradient(circle at 70% 65%, rgba(198, 226, 255, 0.12), transparent 70%)"
      }
    }
  },
  plugins: []
};
