import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { Flex, SimpleGrid, Box } from '@chakra-ui/layout'

const Clientes = ({ images = [], ...props }) => {
  return (
    <Flex
      mx="auto"
      pb={{ xl: 10 }}
      flexDir="column"
      justify="center"
      whiteSpace="normal"
      maxW={{ base: '95%', xl: '1200px' }}
      {...props}
    >
      <SimpleGrid
        templateColumns={{
          base: 'repeat(2, minmax(0, 1fr))',
          ms: 'repeat(3, minmax(0, 1fr))',
          sm: 'repeat(4, minmax(0, 1fr))',
          md: 'repeat(5, minmax(0, 1fr))',
          lg: 'repeat(6, minmax(0, 1fr))',
          xl: 'repeat(9, minmax(0, 1fr))'
        }}
      >
        {images.map((src, i) => (
          <Box
            key={i + src}
            mb={8}
            w="full"
            maxW="120px"
            height="50px"
            pos="relative"
            justifySelf="center"
          >
            <Image src={src} layout="fill" objectFit="contain" />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

Clientes.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}

export default Clientes
