module.exports = {
  content: ["**/*.twig"],
  theme: {
    extend: {
      colors: {
        primary: '#0049ed',
        secondary: '#1D2533',
        whatsapp: '#25D366',
      },
      fontFamily: {
        'poppins': ["Poppins", 'serif'],
      },
      animation: {
        'grow-shrink': 'grow-shrink 5s ease-in-out infinite', // Agrega la animación grow-shrink
      },
      keyframes: {
        'grow-shrink': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
