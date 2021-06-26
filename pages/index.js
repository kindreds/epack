import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
// import TagManager from 'react-gtm-module'
import { Spinner } from '@chakra-ui/spinner'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'
import { Center, Heading, Box } from '@chakra-ui/layout'

import Hero from '../src/Sections/Hero'
import useDrawer from '../src/hooks/useDrawer'

const Navbar = d(() => import('../src/components/Navbar'), { ssr: false })
const Bancos = d(() => import('../src/components/Bancos'), { ssr: false })
const Landing = d(() => import('../src/Sections/Landing'), { ssr: false })
const Header = d(() => import('../src/components/Header'), { ssr: false })
const Sidebar = d(() => import('../src/components/Sidebar'), { ssr: false })
const Ubicanos = d(() => import('../src/components/Ubicanos'), { ssr: false })
const DesktopNav = d(() => import('../src/components/DesktopNav'), {
  ssr: false
})

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
    <div>
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

      <Box>
        {!isDesktop ? <Header /> : <DesktopNav />}
        <div ref={ref}>
          <Hero />
        </div>

        <Landing {...{ isDesktop, inView }} />
        {loadChunks ? <Bancos /> : null}
        {loadChunks ? <Ubicanos /> : null}
        {loadChunks ? <Sidebar /> : null}
        {!isDesktop ? <Navbar /> : null}
      </Box>
    </div>
  )
}

export default Home
