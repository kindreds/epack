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
          <meta
            data-n-head="ssr"
            name="twitter:url"
            content="https://www.epack.pe"
          />
          <meta
            data-n-head="ssr"
            name="twitter:image"
            content="https://bolsas.epack.pe/imagenes/epack-logo-fb.webp"
          />
          <meta data-n-head="ssr" name="twitter:title" content="ePack" />
          <meta
            name="twitter:description"
            content="Bolsas Ecológicas de papel Kraft y Liner a medida personalizada con asa o sin asa. Bolsas para ropa, calzado, accesorios, botellas, alimentos, pan y más. Atención 24/7."
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W72295Z');
              `
            }}
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
