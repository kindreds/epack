import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactSlider from 'react-slidy'
import { Flex, Heading, Box } from '@chakra-ui/layout'

import 'react-slidy/lib/styles.css'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Button } from '@chakra-ui/button'

const BlogSlider = ({
  heading,
  children,
  theme = 'white',
  sizeHeading = '4xl',
  ...props
}) => {
  const [actualSlide, setActualSlide] = useState(0)
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  const isWhite = theme === 'white'

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <Box w="full" bg="primary.500">
      <Flex
        {...props}
        pb={100}
        flexDir="column"
        pos={{ md: 'relative' }}
        py={{ base: 24, md: 24 }}
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
        <Box pos={{ md: 'absolute' }} top={56} left={0} right={0}>
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
