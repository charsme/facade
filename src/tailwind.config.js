/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  prefix: '',
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      black: '#212121',
      white: '#fdfdfd',
      gray: {
        100: '#eeeeee',
        200: '#e0e0e0',
        300: '#bdbdbd',
        400: '#9e9e9e',
        500: '#8e8e8e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#373737'
      },
      red: {
        100: '#ffcccb',
        200: '#ffa4a2',
        300: '#ff867c',
        400: '#ff7961',
        500: '#ff6659',
        600: '#f05545',
        700: '#c62828',
        800: '#b61827',
        900: '#7f0000'
      },
      blue: {
        100: '#ebf8ff',
        200: '#b3e5fc',
        300: '#81d4fa',
        400: '#64b5f6',
        500: '#42a5f5',
        600: '#2196f3',
        700: '#1e88e5',
        800: '#1976d2',
        900: '#1565c0'
      }
    },
    zIndex: {
      auto: 'auto',
      behind: '-10',
      '0': '0',
      '0i': '1',
      '10': '10',
      '10i': '11',
      '20': '20',
      '20i': '21',
      '30': '30',
      '30i': '31',
      '40': '40',
      '40i': '41',
      '50': '50',
      '50i': '51'
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      half: '50%',
      full: '100%',
      screen: '100vh'
    }),
    maxHeight: {
      inherit: 'inherit',
      half: '50%',
      full: '100%',
      screen: '100vh'
    },
    maxWidth: {
      inherit: 'inherit',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      half: '50%',
      full: '100%'
    },
    minHeight: {
      inherit: 'inherit',
      '0': '0',
      half: '50%',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      inherit: 'inherit',
      '0': '0',
      half: '50%',
      full: '100%'
    },
    inset: {
      '0': '0',
      half: '50%',
      full: '100%',
      auto: 'auto'
    },
    extend: {}
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive']
  },
  plugins: []
}
