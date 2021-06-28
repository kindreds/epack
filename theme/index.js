import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  ms: '34.375em',
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
  '2xl': '93em'
})

// const fonts = {
//   heading: 'Flexi',
//   body: 'Flexi-Demi'
// }

const fonts = {}

const colors = {
  primary: {
    50: '#f1edff',
    100: '#d1caec',
    200: '#b2a8d9',
    300: '#9385c8',
    400: '#7462b7',
    500: '#5a489d',
    600: '#46387b',
    700: '#322859',
    800: '#1e1737',
    900: '#0b0618'
  },
  secundary: {
    50: '#dcfdfb',
    100: '#b9f3ed',
    200: '#94e8df',
    300: '#6bddd3',
    400: '#45d4c6',
    500: '#2bbaad',
    600: '#1c9186',
    700: '#0d6860',
    800: '#003f3a',
    900: '#001814'
  },
  amarello: {
    50: '#fff8db',
    100: '#ffeaae',
    200: '#fedc7f',
    300: '#fcce4e',
    400: '#fbc01d',
    500: '#e2a604',
    600: '#af8100',
    700: '#7d5c00',
    800: '#4c3700',
    900: '#1c1100'
  },
  letter: '#fff',
  bgPrimary: '#564596',
  blueBcp: '#17417f',
  orangeBcp: '#ec6855',
  blueInter: '#065ba4',
  greenInter: '#13a74b',
  blueBBVA: '#153f71',
  bgSecundary: '#2ab4a7'
}

const theme = extendTheme({ colors, breakpoints, fonts })

export default theme
