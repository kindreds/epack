import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'

const productList = [
  {
    image: '/bolsa1.png',
    titulo: 'BOLSA CON ASA',
    subTitulo: 'KRAFT de 100gr',
    desc: 'Varias medidas Impresión con tu logo (opcional) Cantidad mínima 100 unidades'
  },
  {
    image: '/bolsa4.png',
    titulo: 'BOLSAS SIN ASA',
    subTitulo: 'KRAFT de 50gr, 60gr, 90gr',
    desc: 'Varias medidas Impresión con tu logo (opcional) Cantidad mínima 100 unidades'
  },
  {
    image: '/bolsa3.png',
    titulo: 'BOLSAS DOYPACK',
    subTitulo: 'KRAFT de 120gr con cierre Ziplock',
    desc: 'Varias medidas Impresión con tu logo (opcional) Cantidad mínima 100 unidades'
  },
  {
    image: '/bolsa2.png',
    titulo: 'BOLSAS CON ASA RIÑON',
    subTitulo: 'Liner de 140gr',
    desc: 'Varias medidas Impresión con tu logo (opcional) Cantidad mínima 100 unidades'
  },
  {
    image: '/bolsa5.png',
    titulo: 'BOLSAS CON ASA YUTE',
    subTitulo: 'KRAFT de 100gr',
    desc: 'Varias medidas Impresión con tu logo (opcional) Cantidad mínima 100 unidades'
  },
  {
    image: '/bolsa6.png',
    titulo: 'CAJAS DE CARTÓN MICROCORRUGADO',
    desc: 'Varias medidas Impresión con tu logo (opcional) Cantidad mínima 100 unidades'
  }
]

const Productos = (props) => {
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (inView) return setLoad(true)
  }, [inView])

  return (
    <Flex ref={ref} mx="auto" id="productos" flexDir="column" {...props}>
      <Box
        pos="relative"
        bgColor="#562196"
        bgBlendMode="darken"
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
        <Box
          left={20}
          bottom={0}
          pos="absolute"
          display={{ base: 'none', lg: 'block' }}
          h={{ base: '200px' }}
          w={{ base: '150px' }}
        >
          {load && (
            <img
              style={{ height: '100%', width: '100%' }}
              src="/productos-recurso.png"
            />
          )}
        </Box>
      </Box>
      <Box bg="white" py={8}>
        {load && (
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
            {productList.map(({ titulo, subTitulo, desc, image }, i) => (
              <Box key={i}>
                <Box
                  mb={4}
                  width="full"
                  rounded="lg"
                  pos="relative"
                  overflow="hidden"
                  height={{ base: '200', lg: '250' }}
                >
                  <Image src={image} layout="fill" />
                </Box>
                <Heading
                  color="primary.500"
                  fontSize={{ base: 'md', md: '2xl' }}
                >
                  {titulo}
                </Heading>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight={{ md: 'semibold' }}
                  color="gray.500"
                >
                  {subTitulo}
                </Text>
                <Text
                  fontSize={{ base: 'smaller', md: 'md' }}
                  fontWeight={{ md: 'semibold' }}
                  mb={2}
                  color="gray.500"
                >
                  {desc}
                </Text>
                <Button colorScheme="secundary">Más información</Button>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Flex>
  )
}

Productos.propTypes = {}

export default Productos
