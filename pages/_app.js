// import { ChakraProvider } from '@chakra-ui/react'
import d from 'next/dynamic'
import { NextSeo } from 'next-seo'

import theme from '../theme'
import meta from '../src/meta'
import AppState from '../src/context/AppState'

import '../src/styles/index.css'
import 'react-slidy/lib/styles.css'

const Provider = d(
  () => import('@chakra-ui/react').then((e) => e.ChakraProvider),
  { ssr: false }
)

/* eslint-disable */

function MyApp({ Component, pageProps }) {
  return (
    <Provider theme={theme}>
      <AppState>
        <NextSeo {...meta} />
        <Component {...pageProps} />
      </AppState>
    </Provider>
  )
}

export default MyApp
