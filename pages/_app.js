import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import AppState from '../src/context/AppState'
import '../src/styles/index.css'

import theme from '../theme'
import meta from '../src/meta'

/* eslint-disable */

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppState>
        <NextSeo {...meta} />
        <Component {...pageProps} />
      </AppState>
    </ChakraProvider>
  )
}

export default MyApp
