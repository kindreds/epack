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

const Home = () => {
  const { ref, inView } = useInView()
  const [loaded, setLoaded] = useState(false)
  const { bancosDrawer, ubicanosDrawer } = useDrawer()
  const [isDesktop] = useMediaQuery(['(min-width: 1024px)'])

  useEffect(() => {
    const preloader = document.getElementById('preloader')
    if (loaded) {
      preloader.style.pointerEvents = 'none'
      preloader.style.opacity = 0
    }
  }, [loaded])

  useEffect(() => {
    window.addEventListener('load', () => setLoaded(true))
    return () => window.removeEventListener('load', () => setLoaded(false))
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#562196" />
      </Head>
      <Center
        id="preloader"
        w="full"
        h="120vh"
        pos="fixed"
        zIndex="999"
        bg="bgPrimary"
        flexDir="column"
        transition="opacity 1.5s ease"
      >
        <Spinner size="lg" />
        <Heading mt={5} color="white">
          ePack
        </Heading>
      </Center>

      {loaded ? <Header /> : null}
      <div ref={ref}>
        <Hero />
      </div>

      <Landing {...{ isDesktop, inView }} />
      {bancosDrawer ? <Bancos /> : null}
      {ubicanosDrawer ? <Ubicanos /> : null}
      {loaded ? <Navbar /> : null}
    </>
  )
}

export default Home
