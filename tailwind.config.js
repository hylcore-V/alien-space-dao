export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00EB81', // main brand color
        'green': '#00EB81',
        "yellow": '#FCF06F',
        "thickYellow": '##ffcc00',
        "pink": "#A500FF",
        'green-start': '#4CAF50', // Lighter green
        'green-end': '#087f23',   // Darker green
        'dark-black': '#1e1e1e',
      },
      fontFamily: {
        'exo': ['Exo', 'Sans-serif'],
        'atomic': ["Atomic Age", 'Sans-serif']
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
      textShadow: {
        'custom': '1px 1px 0px #A500FF',
        'blue': '1px 1px 0px #22FF00',
        'white': '1px 1px 0px #FFFFFF',

      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        beat: 'beat 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          'text-shadow': '1px 1px 0px #A500FF',
        },
        '.text-shadow-blue': {
          'text-shadow': '1px 1px 0px #22FF00',
        },
        '.text-shadow-white': {
          'text-shadow': '1px 1px 0px #FFFFFF',
        },
      });
    },
  ],
};
