import React from 'react'

import d from 'next/dynamic'
import Spinner from '../src/components/Spinner'

const Landing = d(() => import('../src/Sections/Landing'), { ssr: false })

const Home = () => {
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
