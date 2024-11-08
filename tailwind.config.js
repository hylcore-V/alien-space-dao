export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0069af', // main brand color
        "blue": '#00FF5C',
        "yellow": '#deca80',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        '3xm': '320px',
        '2xm': '370px',
        xm: '426px',
        sm: '640px',     // Small screens (min-width: 640px)
        md: '768px',     // Medium screens (min-width: 768px)
        lg: '1024px',    // Large screens (min-width: 1024px)
        xl: '1280px',    // Extra large screens (min-width: 1280px)
        '2xl': '1536px', // 2X large screens (min-width: 1536px)
      },
    },
  },
  plugins: [],
};
