module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: '17.5rem 17.5rem 17.5rem 15rem',
      },
      backgroundImage: {
        'footer-texture': "url('../../images/footer_bg.webp')",
        'newsletter-form': "url('../../images/newsletter-bg.png')",
      },
      skew: {
        20: '20deg',
      },
      colors: {
        'blue-dark': 'var(--color-blue-dark)',
        'blue-dark-transparent': 'var(--color-blue-dark-transparent)',
        'blue-twitter': 'var(--color-blue-twitter)',
        'blue-facebook': 'var(--color-blue-facebook)',
        'green-custom': 'var(--color-green)',
        'orange-custom': 'var(--color-orange)',
        purple: 'var(--color-purple)',
        'white-smoke': 'var(--color-white-smoke)',
        gameZoneGreen: 'var(--color-green)',
        darkBlue: 'var(--color-blue-dark)',
        gameZonePurple: 'var(--color-purple)',
        purpleGameZone: '#1C192C',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      letterSpacing: {
        bitWider: '1.5px',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      boxShadow: {
        'inner-bottom': 'inset 0px -170px 90px -98px #1c182fad',
      },
    },
  },
  variants: {
    display: ['group-hover'],
    transitionProperty: ['group-hover', 'hover'],
    extend: {},
  },
  plugins: [],
};
