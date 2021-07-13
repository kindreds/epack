import React from 'react'
import d from 'next/dynamic'

import { IconButton } from '@chakra-ui/button'
import { ChevronUpIcon } from '@chakra-ui/icons'
import Link from 'react-scroll/modules/components/Link'
import { VisuallyHidden } from '@chakra-ui/visually-hidden'

import Hero from '../src/Sections/Hero'
import Header from '../src/components/Header'
import Spinner from '../src/components/Spinner'
import DesktopNav from '../src/components/DesktopNav'
import { useInView } from 'react-intersection-observer'

const Landing = d(() => import('../src/Sections/Landing'), { ssr: false })

const Home = () => {
  const { ref, inView } = useInView()

  return (
    <>
      {/* PRELOADER */}
      <div id="preloader">
        <div classnames="center">
          <Spinner />
          <h1>ePack</h1>
        </div>
      </div>

      <VisuallyHidden as="h1">BOLSAS DE PAPEL BIODEGRADABLES</VisuallyHidden>
      <VisuallyHidden as="h2">
        Bolsas con asa, sin asa, Doy Pack, Cajas, Hang tag, Scker
      </VisuallyHidden>
      <VisuallyHidden as="h3">
        Somos una empresa fabricante y distribuidora de bolsas de papel Kraft,
        Liner, Doy Pack, cajas de cartón microcorrugado, etiquetas y stickers
        con certificación FSC.
      </VisuallyHidden>
      <VisuallyHidden as="h3">
        EPACK, es la mejor opción en servicio de serigrafía, estampado,
        tampografía y todo tipo de impresión, nuestro taller cuenta con personal
        altamente calificado y solida experticia en el rubro. Productos: Bolsas
        con asa, bolsas sin asa, Bolsas Doy Pack, Bolsas con Asa Riñon,
        Stickers, etc
      </VisuallyHidden>

      <Header />
      <DesktopNav />
      <div ref={ref}>
        <Hero />
      </div>

      <Landing />

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

export default Home
