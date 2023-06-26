/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}',
    'lib/**/*.{js,ts,jsx,tsx}',
    'components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        screen: '100dvh',
        nav: 'var(--nav-size)',
        'nav-screen': 'calc(100dvh - var(--nav-size))',
      },
      height: {
        screen: '100dvh',
        nav: 'var(--nav-size)',
        'nav-screen': 'calc(100dvh - var(--nav-size))',
      },
      padding: {
        nav: 'var(--nav-size)',
      },
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
        serif: ['Kanit', ...defaultTheme.fontFamily.serif],
        mono: ['Kanit', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: colors.orange,
        secondary: colors.teal,
        error: colors.red,
        warning: colors.amber,
        info: colors.cyan,
        success: colors.emerald,
        'brutal-blue': '#38dbff',
        'brutal-orange': '#f1bb92',
        // 'brutal-orange': '#ffb443',
        'brutal-red': '#d21502',
        // 'brutal-red': '#ff5d5d',
        'brutal-yellow': '#fff503',
        'brutal-green': '#00ff75',
        'brutal-lime-green': '#32cd32',
        'brutal-seafoam': '#3ded97',
        'brutal-purple': '#dd7dff',
        'brutal-pink-flamingo': '#fda4ba',

        'brutal-on-black': '#cccccc',
        'brutal-black-container': '#272727',
        'brutal-black': '#1b1b1b',
        // 'brutal-black': '#000000',
        // 'brutal-black': '#383838',

        'brutal-on-white': '#3d3d3d',
        'brutal-white-container': '#d9eddf',
        'brutal-white': '#f0fcf4',

        'brutal-acid': '#c1fd2c',

        /* Theme Pallete */
        // 'brutal-primary': '#3fee9a',
        // 'brutal-primary': '#3fee41',
        'brutal-primary': '#328736', // 90ee90 00df6b 328736
        'brutal-primary-variant': '#90ee90',
        'brutal-on-primary': '#f0f0f0',

        // 'brutal-secondary': '#ee3f94',
        // 'brutal-secondary': '#ee3fec',
        'brutal-secondary': '#721e68', // dd107a 796683
        'brutal-secondary-variant': '#dd107a',
        'brutal-on-secondary': '#ffffff',

        // 'brutal-background': '#ffffff',
        // 'brutal-background': '#010700',
        'brutal-background': '#030b07', // 030b07 1e4f4a 1f2823
        'brutal-on-background': '#fcdfff',

        // 'brutal-surface': '#e3fcee',
        'brutal-surface': '#020202',
        'brutal-on-surface': '#b0b0b0',

        'brutal-info': '#38dbff',
        'brutal-on-info': '#ffffff',

        'brutal-warning': '#f1bb92',
        'brutal-on-warning': '#ffffff',

        'brutal-error': '#d21502',
        'brutal-on-error': '#ffffff',

        'brutal-success': '#32cd32',
        'brutal-on-success': '#ffffff',
      },
      backgroundColor: {
        square: '#1b1b1b',
      },
      backgroundImage: {
        dotted: 'radial-gradient(rgb(63 238 154 / 25%) 13%, transparent 13%)',
        square:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cg fill='%23c1fd2c' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h6v6H0V0zm6 6h6v6H6V6z'/%3E%3C/g%3E%3C/svg%3E\")",
        // dotted: 'radial-gradient(rgb(193 253 44 / 100%) 0.1rem, transparent 0.1rem)',
        test: "url('https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9')",
      },
      backgroundSize: {
        dotted: '1vw 2vh',
        // square: '15px 15px',
      },
      backgroundPosition: {
        dotted: '0 0, 1vw 2vh',
        // square: '0 0, 5px 5px',
      },
      boxShadow: {
        neubrutalism:
          '0px 1px 0px var(--tw-shadow), 1px 0px 0px var(--tw-shadow), 1px 1px 0px var(--tw-shadow), 7px 7px 0px var(--tw-shadow)',
        neubrutalismBig:
          '0px 1px 0px var(--tw-shadow), 1px 0px 0px var(--tw-shadow), 1px 1px 0px var(--tw-shadow), 10px 10px 0px var(--tw-shadow)',
      },
      animation: {
        ripple: 'ripple 0.9s ease 1 forwards',
        'hero-slide': 'hero-slide 500ms ease 1 forwards',
        'hero-grow': 'hero-grow 500ms ease 1 forwards',
        'slide-enter': 'slide-enter 500ms ease 1 forwards',
        'slide-exit': 'slide-exit 500ms ease 1 forwards',
        fill: 'fill 500ms ease 1 forwards',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(10)', opacity: 0.375 },
          '100%': { transform: 'scale(35)', opacity: 0 },
        },
        'slide-enter': {
          '0%': {
            '--tw-translate-x': '-100%',
            opacity: '0',
            transform:
              'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
          '100%': {
            '--tw-translate-x': '0%',
            opacity: '1',
            transform:
              'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
        },
        'slide-exit': {
          '0%': {
            '--tw-translate-x': '0%',
            opacity: '1',
            transform:
              'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
          '100%': {
            '--tw-translate-x': '-100%',
            opacity: '0',
            transform:
              'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
        },
        'hero-slide': {
          '0%': { transform: 'translateX(0)' },
          '50%, 100%': { transform: 'translateX(-100%)' },
        },
        'hero-grow': {
          '0%': { transform: 'scale(0)' },
          '25%, 75%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        fill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  safelist: [
    // {
    //   pattern: /(bg|text|border|shadow)-brutal-/,
    //   variants: ['after', 'before', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    // },
  ],
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('webkitScrollbar', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`webkitScrollbar${separator}${className}`)}::-webkit-scrollbar`;
        });
      });
    }),
  ],
};
