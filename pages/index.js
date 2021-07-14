import React from 'react'
import d from 'next/dynamic'
import { ProductJsonLd } from 'next-seo'

import { IconButton } from '@chakra-ui/button'
import { Link as LinkC } from '@chakra-ui/layout'
import { ChevronUpIcon } from '@chakra-ui/icons'
import Link from 'react-scroll/modules/components/Link'
import { VisuallyHidden } from '@chakra-ui/visually-hidden'

import Hero from '../src/Sections/Hero'
import Header from '../src/components/Header'
import Spinner from '../src/components/Spinner'
import DesktopNav from '../src/components/DesktopNav'
import { useInView } from 'react-intersection-observer'
import { productList } from '../src/data/productos'

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
      <ProductJsonLd
        brand="ePack"
        color="brown"
        manufacturerName="ePack"
        productName="BOLSAS DE PAPEL BIODEGRADABLES"
        images={['https://bolsas.epack.pe/imagenes/epack-logo-wsp.webp']}
        description="Bolsas Ecológicas de papel Kraft y Liner a medida personalizada con asa o sin asa. Bolsas para ropa, calzado, accesorios, botellas, alimentos, pan y más. Atención 24/7."
        manufacturerLogo="https://bolsas.epack.pe/imagenes/epack-logo-wsp.webp"
        material="paper"
        slogan="Bolsas con asa, sin asa, Doy Pack, Cajas, Hang tag, Stickers."
        disambiguatingDescription="Bolsas con asa, sin asa, Doy Pack, Cajas, Hang tag, Stickers."
        releaseDate="2014-02-05T08:00:00+08:00"
        productionDate="2015-02-05T08:00:00+08:00"
        aggregateRating={{
          ratingValue: '4.4',
          reviewCount: '89'
        }}
      />

      <VisuallyHidden as="h1">
        BOLSAS DE PAPEL BIODEGRADABLES EPACK
      </VisuallyHidden>
      <VisuallyHidden as="h2">
        Bolsas con asa, sin asa, Doy Pack, Cajas, Hang tag, Stickers
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

      {productList.map((item, i) => (
        <article key={i}>
          <VisuallyHidden as="h2">{item.titulo}</VisuallyHidden>
          <VisuallyHidden as="h3">{item.subTitulo}</VisuallyHidden>
          <VisuallyHidden as="p">{item.desc}</VisuallyHidden>
          <VisuallyHidden as={LinkC} href={item.href} isExternal>
            Información sobre {item.titulo}
          </VisuallyHidden>
        </article>
      ))}

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
        aria-label="Ir hacia el hero"
        right={!inView ? 5 : -1005}
        bottom={{ base: 100, xl: 10 }}
        icon={<ChevronUpIcon color="bgPrimary" />}
      />
    </>
  )
}

export default Home
