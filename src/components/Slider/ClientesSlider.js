import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactSlider from 'react-slidy'
import { Flex, Heading, Box } from '@chakra-ui/layout'

import 'react-slidy/lib/styles.css'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Button } from '@chakra-ui/button'

const ClientesSlider = ({
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
        <ReactSlider
          showArrows={!!0}
          slide={actualSlide}
          doAfterSlide={updateSlide}
        >
          {children}
        </ReactSlider>
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
