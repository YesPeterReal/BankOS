module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bankos-cyan': '#00E6D1',
        'deep-navy': '#0B1124',
        'pure-white': '#FFFFFF',
        'teal-glow': '#5BC0BE',
        'indigo-accent': '#1C2541',
        'cool-gray': '#AAB2C8',
        'success-green': '#00C853',
        'warning-amber': '#FFB300',
        'risk-red': '#FF1744',
        'light-background': '#F5F7FA',
        'light-text': '#1C1C28',
        'light-gray-ui': '#E0E4EC',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'spaceGrotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};