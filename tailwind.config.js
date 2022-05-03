module.exports = {
  mode:'jit',
  content: [
    "./assets/**/*.{css}",
    "./components/**/*.{js,vue}",
    "./components/*.{js,vue}",
    "./pages/**/*.{js,vue}",
    "./pages/*.{js,vue}",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors:{
        'white':"#ffffff",
        'black':"#000000"
      }
    },
  },
  plugins: [],
}
