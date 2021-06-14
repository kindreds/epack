import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/layout'

const Productos = (props) => {
  return (
    <Flex mx="auto" id="productos" flexDir="column" {...props}>
      <Box
        bg="#503587"
        py={{ base: 5, md: 10 }}
        borderTopColor="bgSecundary"
        borderTopWidth={{ base: 0, md: 5 }}
      >
        <Heading
          mt={1}
          textAlign="center"
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          color={{ base: 'white', md: 'bgSecundary' }}
        >
          Nuestros productos
        </Heading>
      </Box>
      <Box bg="white" py={8}>
        <SimpleGrid
          gap={{ base: 4, xl: 10 }}
          mx="auto"
          w={{
            base: '90%',
            sm: '80%'
          }}
          maxW="1000px"
          templateColumns={{
            base: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))'
          }}
        >
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Box key={i}>
                <Box
                  mb={4}
                  width="full"
                  rounded="lg"
                  pos="relative"
                  overflow="hidden"
                  height={{ base: '200', lg: '250' }}
                >
                  <Image src="/bolsa1.png" layout="fill" />
                </Box>
                <Heading
                  color="primary.500"
                  fontSize={{ base: 'lg', md: '2xl' }}
                >
                  BOLSA CON ASA
                </Heading>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight={{ md: 'semibold' }}
                  color="gray.500"
                >
                  KRAFT de 100gr
                </Text>
                <Text
                  fontSize={{ base: 'smaller', md: 'md' }}
                  fontWeight={{ md: 'semibold' }}
                  mb={2}
                  color="gray.500"
                >
                  Varias medidas Impresión con tu logo (opcional) Cantidad
                  mínima 100 unidades
                </Text>
                <Button colorScheme="secundary">Más información</Button>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

Productos.propTypes = {}

export default Productos
