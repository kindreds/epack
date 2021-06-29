import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'
import { initialize } from 'react-gtm-module/dist/TagManager'

import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'

import Spinner from '../src/components/Spinner'

import Hero from '../src/Sections/Hero'
import Navbar from '../src/components/Navbar'
import Landing from '../src/Sections/Landing'
import Header from '../src/components/Header'
import useDrawer from '../src/hooks/useDrawer'

const Bancos = d(() => import('../src/components/Bancos'))
const Sidebar = d(() => import('../src/components/Sidebar'))
const Ubicanos = d(() => import('../src/components/Ubicanos'))
const DesktopNav = d(() => import('../src/components/DesktopNav'))

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

  useEffect(() => {
    const timer = setTimeout(() => {
      initialize({ gtmId: 'GTM-KBLCP3J' })
      setLoadChunks(true)
    }, 1000 * 10)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#562196" />
        {loadChunks ? (
          <React.Fragment>
            <script
              async
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
          </React.Fragment>
        ) : null}
      </Head>

      {/* PRELOADER */}
      <div id="preloader">
        <div classnames="center">
          <Spinner />
          <h1>ePack</h1>
        </div>
      </div>

      {/* CONTENT */}
      <Header topRef={ref} />
      {isDesktop ? <DesktopNav /> : null}
      <div ref={ref}>
        <Hero />
      </div>

      <Landing {...{ isDesktop, inView }} />
      {!isDesktop ? <Navbar /> : null}

      {/* POrtales que seran cargados al intentar ser abiertos */}
      {loadChunks ? <Bancos /> : null}
      {loadChunks ? <Sidebar /> : null}
      {loadChunks ? <Ubicanos /> : null}
    </>
  )
}

export default Home
