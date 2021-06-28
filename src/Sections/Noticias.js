import React from 'react'
// import PropTypes from 'prop-types'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Text, SimpleGrid } from '@chakra-ui/layout'

const Noticias = (props) => {
  const [is670pxOrLess, is832pxOrLess] = useMediaQuery([
    '(max-height: 670px)',
    '(max-width: 832px)'
  ])

  return (
    <Flex
      mx="auto"
      flexDir="column"
      whiteSpace="normal"
      justify="flex-start"
      maxW={{ base: '80%', md: '1000px' }}
      {...props}
    >
      <SimpleGrid
        gap={2}
        templateColumns={{
          base: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))'
        }}
      >
        {Array(is832pxOrLess ? 6 : 3)
          .fill(null)
          .map((_, i) => (
            <Flex
              key={i}
              w="full"
              bg="bgSecundary"
              height={{ base: is670pxOrLess ? '100px' : '150px', md: '200px' }}
            >
              <Text color="black">noticias</Text>
            </Flex>
          ))}
      </SimpleGrid>
    </Flex>
  )
}

Noticias.propTypes = {}

export default Noticias
