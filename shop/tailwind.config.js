/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'greens' : 'red'
      },
      fontFamily:{
        'primary': ['Agbalumo' ]
      },
      fontWeight :{
        '800' : '800',
        '700' : '700',
        '600' : '600',
        '400' : 400,

      }


    }},
  plugins: [],
}