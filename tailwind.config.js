module.exports = {
  purge: {
    enabled: true,
    content: [
      'public/index.html',
      'public/script.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3D9368',
        secondary: {
          100: '#EE6D79',
          200: '#EC5A69',
          300:'#EA4858',
          400: '#D3414F'
        },
        light: '#C3CDC7',
        dark: '#E8F2ED',
      },
      fontFamily: {
        body: ['Roboto'],
      },
      screens: {
        xs: '420px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
