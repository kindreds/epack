import React, { useEffect, useState } from 'react'
import d from 'next/dynamic'

import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { Flex, Heading, Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'

const ReactSlider = d(() => import('react-slidy'))

const BlogSlider = ({
  heading,
  children,
  theme = 'white',
  sizeHeading = '4xl',
  ...props
}) => {
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  useEffect(() => {
    if (inView) return setLoad(true)
  }, [inView])

  const isWhite = theme === 'white'

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <Box w="full">
      <Flex
        {...props}
        ref={ref}
        pb={100}
        flexDir="column"
        pos={{ md: 'relative' }}
        py={{ base: 24, md: 24 }}
        justify={{ base: 'center', md: 'flex-start' }}
        bgColor="bgPrimary"
        bgBlendMode="darken"
        bgPosition={{ lg: 'top' }}
        bgSize={{ base: 'cover', lg: '100% 100%' }}
        bgRepeat={{ base: 'no-repeat', lg: 'unset' }}
        bgImage={{ base: 'url(slide1.png)', lg: 'url(slide2.png)' }}
      >
        <Box
          right={44}
          top={20}
          pos="absolute"
          display={{ base: 'none', lg: 'block' }}
          h={{ base: '120px' }}
          w={{ base: '120px' }}
        >
          {load && (
            <img
              style={{ height: '100%', width: '100%' }}
              src="/icono-cicular.png"
            />
          )}
        </Box>
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
        {load && (
          <Box
            pos={{ md: 'absolute' }}
            top={56}
            left={0}
            right={0}
            maxW={{ md: '90%' }}
            mx={{ md: 'auto' }}
          >
            <ReactSlider
              showArrows={!!0}
              slide={actualSlide}
              doAfterSlide={updateSlide}
            >
              {children}
            </ReactSlider>
            <Flex mt={5} ml={{ base: '10%', md: 0 }} justify={{ md: 'center' }}>
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
                      bg={{
                        base: active ? bg : 'bgSecundary',
                        md: active ? 'bgPrimary' : 'bgSecundary'
                      }}
                      transform={`scale(${active ? 1 : 0.7})`}
                      onClick={() => updateSlide({ currentSlide: index })}
                    />
                  )
                })}
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

BlogSlider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  sizeHeading: PropTypes.any
}

export default BlogSlider
