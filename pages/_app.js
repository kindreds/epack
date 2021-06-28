import { NextSeo } from 'next-seo'

import meta from '../src/meta'
import AppState from '../src/context/AppState'

import '../src/styles/index.css'
import 'react-slidy/lib/styles.css'

/* eslint-disable */

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <NextSeo {...meta} />
      <Component {...pageProps} />
    </AppState>
  )
}

export default MyApp
