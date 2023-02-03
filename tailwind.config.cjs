/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'first-banner': "url('./src/assets/banner-1.png')",
        'second-banner': "url('./src/assets/banner-2.png')",
        'third-banner': "url('./src/assets/banner-3.png')",
        'fourth-banner': "url('./src/assets/banner-4.png')",
        'fifth-banner': "url('./src/assets/banner-5.png')"
      }
    }
  },
  plugins: []
}
