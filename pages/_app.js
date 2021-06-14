import { ChakraProvider } from '@chakra-ui/react'
import AppState from '../src/context/AppState'

import theme from '../theme'
import '../src/styles/index.css'

/* eslint-disable */

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </ChakraProvider>
  )
}

export default MyApp
