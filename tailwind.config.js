module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper-janna': "url('/wallpaper-janna.png')",
        'wallpaper-riven': "url('/wallpaper-riven.jpg')",
        'wallpaper-vayne': "url('/wallpaper-vayne.jpg')",
      },
      fontFamily: {
        'DmSans': ['"DM Sans"', 'cursive']
      }
    },
  },
  plugins: [],
}
