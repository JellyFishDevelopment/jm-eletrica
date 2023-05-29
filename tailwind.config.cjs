/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'first-banner': "url('/banner-1.png')",
        'second-banner': "url('/banner-2.png')",
        'third-banner': "url('/banner-3.png')",
        'fourth-banner': "url('/banner-4.png')",
        'fifth-banner': "url('/banner-5.png')",
        'sixth-banner': "url('/banner-6.png')",
        'seventh-banner': "url('/banner-services.png')",
        'eighth-banner': "url('/banner-8.png')",
        'carrousel-1': "url('/carrousel-1.png')",
        'carrousel-2': "url('/carrousel-2.png')",
        'carrousel-3': "url('/carrousel-3.png')",
        'carrousel-4': "url('/carrousel-4.png')"
      }
    }
  },
  plugins: []
})
