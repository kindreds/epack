import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es-ES">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#562196" />
          <link
            sizes="144x144"
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#562196" />

          {/* TWITTER - FACEBOOK */}
          <meta name="twitter:title" content="ePack" />
          <meta name="twitter:card" content="summary_large_image" />
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
