import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
// import TagManager from 'react-gtm-module'
import { Spinner } from '@chakra-ui/spinner'
import { Center, Heading } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'

import Hero from '../src/Sections/Hero'
import Navbar from '../src/components/Navbar'
import useDrawer from '../src/hooks/useDrawer'

const Bancos = d(() => import('../src/components/Bancos'))
const Landing = d(() => import('../src/Sections/Landing'))
const Header = d(() => import('../src/components/Header'))
const Sidebar = d(() => import('../src/components/Sidebar'))
const Ubicanos = d(() => import('../src/components/Ubicanos'))

const Home = () => {
  const { ref, inView } = useInView()
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

      <Header />
      <div ref={ref}>
        <Hero />
      </div>

      <Landing {...{ isDesktop, inView }} />
      {loadChunks ? <Bancos /> : null}
      {loadChunks ? <Ubicanos /> : null}
      {loadChunks ? <Sidebar /> : null}
      <Navbar />
    </>
  )
}

export default Home
