import React from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/react'

import Hero from '../Hero'
import Footer from '../Footer'
import Nosotros from '../Nosotros'
import Noticias from '../Noticias'
import Clientes from '../Clientes'
import Contacto from '../Contacto'
import Productos from '../Productos'
import Servicios from '../Servicios'
import Testimonios from '../Testimonios'
import Slider from '../../components/Slider'
import BlogSlider from '../../components/Slider/BlogSlider'
import ClientesSlider from '../../components/Slider/ClientesSlider'

import { images1, images2, images4, images5, images6 } from '../../data/images'

const Header = d(() => import('../../components/Header'), { ssr: false })
const DesktopNav = d(() => import('../../components/DesktopNav'), {
  ssr: false
})
const UbicanosDesk = d(() => import('../../components/Ubicanos/UbicanosDesk'), {
  ssr: false
})

const Landing = ({ heroRef, isDesktop }) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <>
      {isDesktop ? <DesktopNav /> : <Header />}
      <Box bg="bgPrimary" ref={heroRef}>
        <Hero />
      </Box>
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
      {isLargerThan1280 ? (
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
      ) : (
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
      )}
      <Contacto />
      {isDesktop && <UbicanosDesk />}
      {isDesktop && <Footer />}
    </>
  )
}

Landing.propTypes = {
  heroRef: PropTypes.func,
  isDesktop: PropTypes.bool
}

export default Landing
