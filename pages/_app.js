import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import theme from '../theme'
import meta from '../src/meta'
import AppState from '../src/context/AppState'

import '../src/styles/index.css'
import 'react-slidy/lib/styles.css'

/* eslint-disable */

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppState>
        <NextSeo {...meta} />
        <Component {...pageProps} />
      </AppState>
    </ChakraProvider>
  )
}

export default MyApp
