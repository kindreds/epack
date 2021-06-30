import React, { useEffect } from 'react'

import d from 'next/dynamic'
import Tag from 'react-gtm-module'

import Spinner from '../src/components/Spinner'

const Landing = d(() => import('../src/Sections/Landing'), { ssr: false })

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      Tag.initialize({ gtmId: 'GTM-KBLCP3J' })
    }, 1000 * 10)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* PRELOADER */}
      <div id="preloader">
        <div classnames="center">
          <Spinner />
          <h1>ePack</h1>
        </div>
      </div>

      <Landing />
    </>
  )
}

export default Home
