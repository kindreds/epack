import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import d from 'next/dynamic'

import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'

import Spinner from '../src/components/Spinner'

import Hero from '../src/Sections/Hero'
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import Landing from '../src/Sections/Landing'
import useDrawer from '../src/hooks/useDrawer'

const Bancos = d(() => import('../src/components/Bancos'), { ssr: false })
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

      {/* PRELOADER */}
      <div id="preloader">
        <div classnames="center">
          <Spinner />
          <h1>ePack</h1>
        </div>
      </div>

      {/* CONTENT */}
      {!isDesktop ? <Header /> : <DesktopNav />}
      <div ref={ref}>
        <Hero />
      </div>

      <Landing {...{ isDesktop, inView }} />
      {loadChunks ? <Bancos /> : null}
      {loadChunks ? <Ubicanos /> : null}
      {loadChunks ? <Sidebar /> : null}
      {!isDesktop ? <Navbar /> : null}
      <style jsx>{`
        #preloader {
          width: 100%;
          height: 110vh;
          position: fixed;
          z-index: 99;
          background-color: #564596;
          display: grid;
          place-items: center;

          transition: opacity 1.5s ease-in-out;
        }

        .center {
          display: flex;
          aling-items: center;
          justify-content: center;
          height: 100%;
        }

        #preloader h1 {
          color: white;
          font-size: 5rem;
          text-align: center;
          animation: fadeIn 1s linear;
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
