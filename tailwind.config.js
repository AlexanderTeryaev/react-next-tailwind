module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        0.25: '0.0625rem',
        15: '3.75rem',
        18: '4.375rem'
      },
      width: {
        52: '13rem',
        334: '20.875rem',
        350: '21.875rem'
      },
      margin: {
        15: '3.75rem',
        18: '4.375rem'
      },
      body: [
        '"Open Sans"'
      ],
      display: [
        'Montserrat'
      ],
      fontFamily: {
        // display: ["var(--font-display)"],
        // body: ["var(--font-body)"],
        poppins: '"Poppins", sans-serif',
        roboto: '"Roboto", sans-serif'
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        text: 'var(--color-text)',
        background: 'var(--color-background)'

      }
    },
    screens: {
      'max-3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      'max-2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'max-xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'max-md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'max-sm': { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {},
  plugins: [
    require('./theme.config')
  ]
}
