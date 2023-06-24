/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-main)'],
        ptSerif: ['var(--font-ptSerif)'],
      },
      backgroundImage: {
        'inventory-gradient':
          'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(39, 32, 67, 0.4) 0%, rgba(39, 32, 67, 0) 100%)',
        'input-top-to-bottom':
          'linear-gradient(180deg, #272043 0%, rgba(39, 32, 67, 0) 100%)',
        'input-bottom-to-top':
          'linear-gradient(180deg, rgba(39, 32, 67, 0) 0%, #272043 100%)',
        'primary-radial':
          'radial-gradient(52.27% 52.27% at 50% 50%, rgba(162, 122, 195, 0.15) 0%, rgba(186, 111, 248, 0.1) 46.87%, rgba(44, 37, 66, 0) 100%);',
        'secondary-radial':
          'radial-gradient(52.27% 52.27% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(126, 115, 173, 0.1) 0.01%, rgba(126, 115, 173, 0) 100%);',
        'default-frame': 'linear-gradient(180deg, #1A1730 0%, #272043 100%);',
        'legendary-frame': 'linear-gradient(180deg, #693D0C 0%, #C6B214 100%);',
        'epic-frame': 'linear-gradient(180deg, #2F0D16 0%, #A42522 100%);',
        'rare-frame': 'linear-gradient(180deg, #152333 0%, #295491 100%);',
        'uncommon-frame': 'linear-gradient(180deg, #153627 0%, #368D6E 100%);',
        'common-frame': 'linear-gradient(180deg, #2B3136 0%, #677479 100%);',
      },
      colors: {
        primary: {
          100: '#DDD4FF',
          200: '#B8B0DB',
          400: '#7E73AD',
          500: '#4B406A',
          600: '#2C2542',
          700: '#272043',
          800: '#1A1830',
          900: '#1D1822',
        },
      },
      keyframes: {
        contentShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentHide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHide: 'contentHide 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
