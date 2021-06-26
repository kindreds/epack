import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
import TagManager from 'react-gtm-module'
import { Fade } from '@chakra-ui/transition'
import { Spinner } from '@chakra-ui/spinner'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'
import { Box, Center, Heading } from '@chakra-ui/layout'

import Hero from '../src/Sections/Hero'
import Navbar from '../src/components/Navbar'
import Landing from '../src/Sections/Landing'

const Bancos = d(() => import('../src/components/Bancos'), { ssr: false })
const Header = d(() => import('../src/components/Header'), { ssr: false })
const Ubicanos = d(() => import('../src/components/Ubicanos'), { ssr: false })
const DesktopNav = d(() => import('../src/components/DesktopNav'), {
  ssr: false
})

const Home = () => {
  const { ref, inView } = useInView()
  const [loaded, setLoaded] = useState(true)
  const [isDesktop] = useMediaQuery(['(min-width: 1024px)'])

  useEffect(() => {
    const timer = setTimeout(() => {
      const tagManagerArgs = { gtmId: 'GTM-KBLCP3J' }
      TagManager.initialize(tagManagerArgs)
    }, 1000 * 10)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.addEventListener('load', () => setLoaded(false))
    return () => window.removeEventListener('load', () => setLoaded(false))
  }, [])

  return (
    <>
      <Center
        as={Fade}
        in={loaded}
        w="full"
        h="100vh"
        pos="fixed"
        zIndex="999"
        bg="bgPrimary"
        flexDir="column"
      >
        <Spinner size="lg" />
        <Heading mt={5} color="white">
          ePack
        </Heading>
      </Center>

      <Box
        as={Fade}
        in={!loaded}
        bgColor="bgPrimary"
        bgBlendMode="darken"
        bgPosition={{ lg: 'top' }}
        bgSize={{ base: 'contain', lg: '100% 11%' }}
        bgRepeat={{ base: 'no-repeat', lg: 'unset' }}
        bgImage={{ base: 'url(slide1.png)', lg: 'url(slide2.png)' }}
      >
        <Head>
          <meta name="theme-color" content="#562196" />
        </Head>

        {isDesktop ? <DesktopNav /> : <Header />}
        <div ref={ref}>
          <Hero />
        </div>

        <Landing {...{ isDesktop, inView }} />
        {!isDesktop && <Navbar />}
        {!isDesktop && <Bancos />}
        {!isDesktop && <Ubicanos />}
      </Box>
    </>
  )
}

export default Home
