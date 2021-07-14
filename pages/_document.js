import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#562196" />
          <link rel="shortcut icon" href="/isotipo.png" />
          <link rel="apple-touch-icon" href="/isotipo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/isotipo.png" />

          {/* TWITTER - FACEBOOK */}
          <meta name="twitter:title" content="ePack" />
          <meta name="twitter:url" content="https://bolsas.epack.pe" />
          <meta
            name="twitter:image"
            content="https://bolsas.epack.pe/imagenes/epack-logo-fb.webp"
          />
          <meta
            name="twitter:description"
            content="Bolsas Ecológicas de papel Kraft y Liner a medida personalizada con asa o sin asa. Bolsas para ropa, calzado, accesorios, botellas, alimentos, pan y más. Atención 24/7."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
