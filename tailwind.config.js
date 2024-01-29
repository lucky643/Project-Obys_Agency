/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      keyframes:{
        'now':{
          '0%':{opacity:'1',font_family:'Silk Serif'},
          '45%':{opacity:'0'},
          '50%':{opacity:'1',font_family:'Silk'},
          '95%':{opacity:'0'},
          '100%':{opacity:'1'},
        }
      },
      animation:{
        'now': 'now 1s linear'
      }
    },
  },
  plugins: [],
}
