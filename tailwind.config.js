module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('/wallpaper.png')",
      },
      fontFamily: {
        'DmSans': ['"DM Sans"', 'cursive']
      }
    },
  },
  plugins: [],
}
