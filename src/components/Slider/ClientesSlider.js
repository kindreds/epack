import React, { useEffect, useState } from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'
import { Skeleton } from '@chakra-ui/skeleton'
import { Flex, Heading, Box } from '@chakra-ui/layout'

import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'
import useDrawer from '../../hooks/useDrawer'
import { SliderLoader } from './SliderLoader'

const ReactSlider = d(() => import('react-slidy'), {
  ssr: false,
  loading: SliderLoader
})

const ClientesSlider = ({
  heading,
  children,
  theme = 'white',
  sizeHeading = '4xl',
  ...props
}) => {
  const { loadChunks } = useDrawer()
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  useEffect(() => {
    if (inView) setLoad(true)
    if (loadChunks) setLoad(true)
  }, [inView, loadChunks])

  const isWhite = theme === 'white'

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <Box
      w="full"
      ref={ref}
      minH={{ base: '100vh', lg: 'unset' }}
      bgColor="bgPrimary"
      bgBlendMode="darken"
      bgPosition={{ lg: 'top' }}
      bgSize={{ base: 'cover' }}
      bgRepeat={{ base: 'no-repeat', lg: 'unset' }}
      bgImage={{ base: 'url(slide1_cp.webp)', lg: 'url(slide2.png)' }}
    >
      <Flex
        {...props}
        flexDir="column"
        py={{ base: 24, xl: 16 }}
        // minH={{ base: '100vh', md: '300px' }}
        bg={isWhite ? 'white' : 'transparent'}
        justify={{ base: 'center', md: 'flex-start' }}
      >
        <Heading
          as="h1"
          mx="auto"
          textAlign="center"
          fontSize={sizeHeading}
          mb={is670pxOrLess ? 5 : 10}
          maxW={{ base: '80%', md: '500px' }}
          color={isWhite ? 'bgPrimary' : 'white'}
        >
          {heading}
        </Heading>
        {load ? (
          <ReactSlider
            showArrows={!!0}
            slide={actualSlide}
            doAfterSlide={updateSlide}
          >
            {children}
          </ReactSlider>
        ) : null}
        <Flex mt={5} ml={{ base: '10%', xl: '20%' }}>
          {Array(3)
            .fill(null)
            .map((_, index) => {
              const active = index === actualSlide
              const bg = isWhite ? 'bgPrimary' : 'white'
              return (
                <Button
                  ml={1}
                  size="xs"
                  key={index}
                  rounded="full"
                  variant="unstyled"
                  bg={active ? bg : 'bgSecundary'}
                  transform={`scale(${active ? 1 : 0.7})`}
                  onClick={() => updateSlide({ currentSlide: index })}
                />
              )
            })}
        </Flex>
      </Flex>
    </Box>
  )
}

ClientesSlider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  sizeHeading: PropTypes.any
}

export default ClientesSlider
