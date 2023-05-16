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
        ubuntu: ['var(--font-notoSansKR)'],
      },
      backgroundImage: {
        'inventory-gradient':
          'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(39, 32, 67, 0.4) 0%, rgba(39, 32, 67, 0) 100%)',
        'input-top-to-bottom':
          'linear-gradient(180deg, #272043 0%, rgba(39, 32, 67, 0) 100%)',
        'input-bottom-to-top':
          'linear-gradient(180deg, rgba(39, 32, 67, 0) 0%, #272043 100%)',
        'inputalt-top-to-bottom':
          'linear-gradient(360deg, rgba(119, 117, 126, 0) 0%, #77757E 100%);',
        'inputalt-bottom-to-top':
          'linear-gradient(360deg, #77757E 0%, rgba(119, 117, 126, 0) 100%)',
        'primary-radial': 'radial-gradient(52.27% 52.27% at 50% 50%, rgba(162, 122, 195, 0.12) 0%, rgba(186, 111, 248, 0.053121) 46.87%, rgba(44, 37, 66, 0) 100%);',
        'secondary-radial': 'radial-gradient(52.27% 52.27% at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(126, 115, 173, 0.16) 0.01%, rgba(126, 115, 173, 0) 100%);',
        // 'tertiary-radial': 'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(114, 87, 143, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        'tertiary-radial': 'radial-gradient(rgba(114, 87, 143, 0.4), rgba(255, 255, 255, 0.05));',
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
    },
  },
  plugins: [],
};
