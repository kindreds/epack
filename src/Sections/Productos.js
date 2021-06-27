import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'
import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/layout'

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
const productList1 = [
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
  }
]

const productList2 = [
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

const Producto = ({ titulo, subTitulo, desc, image }, i) => (
  <Box key={i}>
    <Box
      mb={{ base: 4, md: 0 }}
      width="full"
      borderTopRadius="lg"
      pos="relative"
      overflow="hidden"
      height={{
        base: 'calc(100vw / 2.5)',
        sm: '150px',
        md: '200px',
        lg: '250px'
      }}
    >
      <Image src={image} layout="fill" />
    </Box>
    <Flex
      p={{ md: 5 }}
      minH={{ base: '200px', sm: '200px', md: '250px' }}
      bg="white"
      borderBottomRadius="lg"
      flexDirection="column"
    >
      <Heading color="primary.500" fontSize={{ base: 'md', lg: '2xl' }}>
        {titulo}
      </Heading>
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight={{ md: 'semibold' }}
        color="gray.500"
      >
        {!subTitulo ? ' ' : subTitulo}
      </Text>
      <Text
        mb={3}
        flex={1}
        color="gray.500"
        fontWeight={{ md: 'semibold' }}
        fontSize={{ base: 'smaller', md: 'md' }}
      >
        {desc}
      </Text>
      <Button colorScheme="secundary">Más información</Button>
    </Flex>
  </Box>
)

const Productos = (props) => {
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)
  const [is835px] = useMediaQuery(['(max-width: 835px)'])

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
      {is835px ? (
        <Box bg="white" py={16}>
          {load && (
            <SimpleGrid
              gap={{ base: 4, xl: 20 }}
              mx="auto"
              w={{
                base: '90%',
                sm: '80%'
              }}
              maxW="1000px"
              templateColumns={{
                base: 'repeat(2, minmax(0, 1fr))',
                sm: 'repeat(3, minmax(0, 1fr))'
              }}
            >
              {productList.map((p, i) => (
                <Producto key={i} {...p} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      ) : (
        <>
          <Box bg="white" py={16}>
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
                {productList1.map((p, i) => (
                  <Producto key={i} {...p} />
                ))}
              </SimpleGrid>
            )}
          </Box>
          <Box bg="gray.200" pt={16}>
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
                {productList2.map((p, i) => (
                  <Producto key={i} {...p} />
                ))}
              </SimpleGrid>
            )}
          </Box>
        </>
      )}
    </Flex>
  )
}

Productos.propTypes = {}

export default Productos
