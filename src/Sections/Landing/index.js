import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
import Tag from 'react-gtm-module'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/layout'
import useDrawer from '../../hooks/useDrawer'
import { IconButton } from '@chakra-ui/button'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/media-query'
import Link from 'react-scroll/modules/components/Link'
import { useInView } from 'react-intersection-observer'

import Hero from '../Hero'
import Nosotros from '../Nosotros'
import Noticias from '../Noticias'
import Clientes from '../Clientes'
import Contacto from '../Contacto'
import Productos from '../Productos'
import Servicios from '../Servicios'
import Testimonios from '../Testimonios'
import Slider from '../../components/Slider'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import DesktopNav from '../../components/DesktopNav'
import BlogSlider from '../../components/Slider/BlogSlider'
import ClientesSlider from '../../components/Slider/ClientesSlider'

import { images1, images2, images4, images5, images6 } from '../../data/images'

const Footer = d(() => import('../Footer'), { ssr: false })
const Bancos = d(() => import('../../components/Bancos'), { ssr: false })
const Sidebar = d(() => import('../../components/Sidebar'), { ssr: false })
const Ubicanos = d(() => import('../../components/Ubicanos'), { ssr: false })
const UbicanosDesk = d(() => import('../../components/Ubicanos/UbicanosDesk'), {
  ssr: false
})

const Landing = () => {
  const { ref, inView } = useInView()
  const [loadChunks, setLoadChunks] = useState(false)
  const [isDesktop] = useMediaQuery(['(min-width: 1024px)'])
  const { bancosDrawer, ubicanosDrawer, sidebarDrawer } = useDrawer()

  useEffect(() => {
    const onLoad = () => {
      const preloader = document.getElementById('preloader')
      preloader.style.pointerEvents = 'none'
      preloader.style.opacity = 0
      window.removeEventListener('load', onLoad)
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
      Tag.initialize({ gtmId: 'GTM-KBLCP3J' })
      setLoadChunks(true)
    }, 1000 * 10)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#562196" />
        {loadChunks ? (
          <>
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
          </>
        ) : null}
      </Head>
      {/* CONTENT */}
      <Header />
      {isDesktop ? <DesktopNav /> : null}
      <div ref={ref}>
        <Hero />
      </div>

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
          <Clientes images={images6} />
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
        </ClientesSlider>
      </Box>
      <div id="contacto">
        <Contacto />
      </div>
      <Navbar />

      {/* POrtales que seran cargados al intentar ser abiertos */}
      {loadChunks ? <Bancos /> : null}
      {loadChunks ? <Sidebar /> : null}
      {loadChunks ? <Ubicanos /> : null}

      {isDesktop ? (
        <>
          <UbicanosDesk />
          <Footer />
        </>
      ) : null}

      <IconButton
        spy
        smooth
        as={Link}
        to="inicio"
        pos="fixed"
        zIndex="88"
        fontSize="4xl"
        colorScheme="secundary"
        right={!inView ? 5 : -1005}
        bottom={{ base: 100, xl: 10 }}
        icon={<ChevronUpIcon color="bgPrimary" />}
      />
    </>
  )
}

Landing.propTypes = {
  inView: PropTypes.bool,
  isDesktop: PropTypes.bool
}

export default Landing
