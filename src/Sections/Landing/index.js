import React from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import { IconButton } from '@chakra-ui/button'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/media-query'

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

const Footer = d(() => import('../Footer'))
const UbicanosDesk = d(() => import('../../components/Ubicanos/UbicanosDesk'))

const Landing = ({ inView, isDesktop }) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <>
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
