import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import dy from 'next/dynamic'
import { Link } from 'react-scroll'
import { Box } from '@chakra-ui/layout'
import TagManager from 'react-gtm-module'
import { IconButton } from '@chakra-ui/button'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

import Landing from '../src/Sections/Landing'
// import Bancos from '../src/components/Bancos'
// import Navbar from '../src/components/Navbar'
// import Header from '../src/components/Header'
// import Ubicanos from '../src/components/Ubicanos'
// import DesktopNav from '../src/components/DesktopNav'

const Navbar = dy(() => import('../src/components/Navbar'), { ssr: false })
const Bancos = dy(() => import('../src/components/Bancos'), { ssr: false })
const Ubicanos = dy(() => import('../src/components/Ubicanos'), { ssr: false })

const Home = () => {
  const [load, setLoad] = useState(!!0)
  const { ref, inView } = useInView()
  const [isDesktop] = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    const timer = setTimeout(() => {
      const tagManagerArgs = { gtmId: 'GTM-KBLCP3J' }
      TagManager.initialize(tagManagerArgs)
      setLoad(!0)
    }, 1000 * 10)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box>
      <Head>
        {load && (
          <>
            <script
              defer
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
        )}
        <link rel="icon" href="/isotipo.png" />
        <meta name="theme-color" content="#564596" />
        <meta name="title" content="ePack" />
        <meta name="og:title" content="ePack" />
        <meta
          name="description"
          content="Bolsas Ecológicas de papel Kraft y Liner a medida personalizada con asa o sin asa. Bolsas para ropa, calzado, accesorios, botellas, alimentos, pan y más. Atención 24/7."
        />
        <meta
          name="og:description"
          content="Bolsas Ecológicas de papel Kraft y Liner a medida personalizada con asa o sin asa. Bolsas para ropa, calzado, accesorios, botellas, alimentos, pan y más. Atención 24/7."
        />
        <title>ePack</title>
      </Head>

      <Landing {...{ heroRef: ref, isDesktop }} />
      {!isDesktop && <Navbar />}
      {!isDesktop && <Ubicanos />}
      {!isDesktop && <Bancos />}

      <IconButton
        spy
        smooth
        as={Link}
        to="inicio"
        pos="fixed"
        fontSize="4xl"
        colorScheme="secundary"
        right={!inView ? 5 : -1005}
        bottom={{ base: 100, xl: 10 }}
        icon={<ChevronUpIcon color="bgPrimary" />}
      />
    </Box>
  )
}

export default Home
