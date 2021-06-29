import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import TagManager from 'react-gtm-module'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import meta from '../src/meta'
import Globals from '../src/styles'
import AppState from '../src/context/AppState'

/* eslint-disable */

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KBLCP3J' })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppState>
        <NextSeo {...meta} />
        <Globals />
        <Component {...pageProps} />
      </AppState>
    </ChakraProvider>
  )
}

export default MyApp
