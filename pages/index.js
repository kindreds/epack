import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
// import TagManager from 'react-gtm-module'
import { Fade } from '@chakra-ui/transition'
import { Spinner } from '@chakra-ui/spinner'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'
import { Box, Center, Heading } from '@chakra-ui/layout'

import Hero from '../src/Sections/Hero'
import Navbar from '../src/components/Navbar'
import useDrawer from '../src/hooks/useDrawer'

const Bancos = d(() => import('../src/components/Bancos'), { ssr: false })
const Landing = d(() => import('../src/Sections/Landing'), { ssr: false })
const Header = d(() => import('../src/components/Header'), { ssr: false })
const Ubicanos = d(() => import('../src/components/Ubicanos'), { ssr: false })
const DesktopNav = d(() => import('../src/components/DesktopNav'), {
  ssr: false
})

const Home = () => {
  const { ref, inView } = useInView()
  const { windowLoaded: loaded, bancosDrawer, ubicanosDrawer } = useDrawer()
  const [isDesktop] = useMediaQuery(['(min-width: 1024px)'])

  useEffect(() => {
    const preloader = document.getElementById('preloader')
    if (loaded) preloader.style.pointerEvents = 'none'
  }, [loaded])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#562196" />
      </Head>
      <Center
        id="preloader"
        as={Fade}
        in={!loaded}
        delay={0.3}
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
        in={loaded}
        bgColor="bgPrimary"
        bgBlendMode="darken"
        bgPosition={{ lg: 'top' }}
        bgSize={{ base: 'contain', lg: '100% 11%' }}
        bgRepeat={{ base: 'no-repeat', lg: 'unset' }}
        bgImage={{ base: 'url(slide1.png)', lg: 'url(slide2.png)' }}
      >
        {isDesktop ? <DesktopNav /> : <Header />}
        <div ref={ref}>
          <Hero />
        </div>

        {inView ? <Landing {...{ isDesktop, inView }} /> : null}
        <Navbar />
        {bancosDrawer ? <Bancos /> : null}
        {ubicanosDrawer ? <Ubicanos /> : null}
      </Box>
    </>
  )
}

export default Home
