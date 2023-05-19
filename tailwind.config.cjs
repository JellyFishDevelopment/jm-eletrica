/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'eighth-banner': "url('/banner-8.png')"
      }
    }
  },
  plugins: []
}
