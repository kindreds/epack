import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

import Nosotros from '../Nosotros'
import Noticias from '../Noticias'
import Clientes from '../Clientes'
import Contacto from '../Contacto'
import Productos from '../Productos'
import Servicios from '../Servicios'
import Testimonios from '../Testimonios'
import Slider from '../../components/Slider'
import Navbar from '../../components/Navbar'
import useDrawer from '../../hooks/useDrawer'
import BlogSlider from '../../components/Slider/BlogSlider'
import ClientesSlider from '../../components/Slider/ClientesSlider'

import { images1, images2, images3, images4, images5 } from '../../data/images'

const Footer = d(() => import('../Footer'), { ssr: false })
const Bancos = d(() => import('../../components/Bancos'), { ssr: false })
const Sidebar = d(() => import('../../components/Sidebar'), { ssr: false })
const Ubicanos = d(() => import('../../components/Ubicanos'), { ssr: false })
const UbicanosDesk = d(() => import('../../components/Ubicanos/UbicanosDesk'), {
  ssr: false
})

const Landing = () => {
  const [loadChunks, setLoadChunks] = useState(false)
  const [isDesktop] = useMediaQuery(['(min-width: 1024px)'])
  const { bancosDrawer, ubicanosDrawer, sidebarDrawer } = useDrawer()

  useEffect(() => {
    const onLoad = () => {
      const preloader = document.getElementById('preloader')
      preloader.style.pointerEvents = 'none'
      preloader.style.opacity = 0
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  useEffect(() => {
    if (bancosDrawer || ubicanosDrawer || sidebarDrawer) {
      setLoadChunks(true)
    }
  }, [bancosDrawer, ubicanosDrawer, sidebarDrawer])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadChunks(true)
    }, 1000 * 10)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        {loadChunks ? (
          <>
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
            {/* <!-- Facebook Pixel Code --> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '330069158766167');
            fbq('track', 'PageView');
            `
              }}
            />

            <meta
              name="facebook-domain-verification"
              content="a5h74k92ofbuywos6de1y7c8zpjobv"
            />

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-175669111-1"
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-175669111-1');
              `
              }}
            />

            {/* <!-- Hotjar Tracking Code for EPACK - EMPAQUES BIODEGRADABLES --> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1953164,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `
              }}
            />

            {/* ONE SIGNAL */}

            <script
              async
              src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                  OneSignal.init({
                    appId: "faecf426-0049-4d33-8fc9-04d068e7b7ab",
                    safari_web_id: "web.onesignal.auto.0c2e8ce9-0832-4305-9baa-f4eee2871a0e",
                    notifyButton: {
                      enable: true,
                    },
                  });
                });
              `
              }}
            />
          </>
        ) : null}
      </Head>
      {/* CONTENT */}

      <Nosotros />
      <Productos />
      <Servicios />
      <div id="blog">
        <BlogSlider
          theme="primary"
          sizeHeading={{ base: '2xl', md: '4xl' }}
          heading="Nuestras últimas noticias y artículos"
        >
          <Noticias />
          <Noticias />
          <Noticias />
        </BlogSlider>
      </div>
      <div id="testimonios">
        <Slider heading="Testimonios">
          <Testimonios />
          <Testimonios />
          <Testimonios />
        </Slider>
      </div>
      <Box display={{ base: 'block', xl: 'none' }}>
        <ClientesSlider
          id="clientes"
          theme="primary"
          heading="Nuestros Clientes"
          sizeHeading={{ base: '2xl', md: '4xl' }}
        >
          <Clientes images={images4} />
          <Clientes images={images5} />
          {/* <Clientes images={images6} /> */}
        </ClientesSlider>
      </Box>
      <Box display={{ base: 'none', xl: 'block' }}>
        <ClientesSlider
          pt={10}
          id="clientes"
          theme="primary"
          heading="Nuestros Clientes"
          sizeHeading={{ base: '2xl', md: '4xl' }}
        >
          <Clientes images={images1} />
          <Clientes images={images2} />
          <Clientes images={images3} />
        </ClientesSlider>
      </Box>
      <div id="contacto">
        <Contacto />
      </div>
      <Navbar />

      {/* POrtales que seran cargados al intentar ser abiertos */}

      {isDesktop ? (
        <>
          <UbicanosDesk />
          <Footer />
        </>
      ) : null}

      {loadChunks ? (
        <>
          <Bancos />
          <Sidebar />
          <Ubicanos />
        </>
      ) : null}
    </>
  )
}

Landing.propTypes = {
  inView: PropTypes.bool,
  isDesktop: PropTypes.bool
}

export default Landing
