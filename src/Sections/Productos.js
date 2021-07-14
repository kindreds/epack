import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { Flex, Text, Heading, Box, SimpleGrid, Link } from '@chakra-ui/layout'

import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { productList, productList1, productList2 } from '../data/productos'

const Producto = ({ titulo, subTitulo, desc, image, href }) => (
  <div>
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
      <Image src={image} alt={titulo} layout="fill" />
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
      <Button as={Link} isExternal href={href} colorScheme="secundary">
        Más información
      </Button>
    </Flex>
  </div>
)

const Productos = (props) => {
  const parser = (i) => parseFloat(`1.${i}`)
  return (
    <Flex
      mx="auto"
      id="productos"
      flexDir="column"
      overflow="hidden"
      {...props}
    >
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
          <Image width={150} height={200} src="/productos-recurso.png" />
        </Box>
      </Box>
      <Box bg="white" py={16} display={{ base: 'block', md: 'none' }}>
        <InView>
          {({ ref, inView }) => (
            <SimpleGrid
              ref={ref}
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
                <motion.div
                  key={i}
                  initial={{ y: 60, opacity: 0 }}
                  animate={
                    inView
                      ? { y: 0, opacity: 1, transition: { delay: parser(i) } }
                      : { y: 60, opacity: 0 }
                  }
                >
                  <Producto {...p} />
                </motion.div>
              ))}
            </SimpleGrid>
          )}
        </InView>
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <Box bg="white" py={16}>
          <InView>
            {({ ref, inView }) => (
              <SimpleGrid
                ref={ref}
                mx="auto"
                maxW="1000px"
                gap={{ base: 4, xl: 10 }}
                w={{ base: '90%', sm: '80%' }}
                templateColumns={{
                  base: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(3, minmax(0, 1fr))'
                }}
              >
                {productList1.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 60, opacity: 0 }}
                    animate={
                      inView
                        ? { y: 0, opacity: 1, transition: { delay: parser(i) } }
                        : { y: 60, opacity: 0 }
                    }
                  >
                    <Producto {...p} />
                  </motion.div>
                ))}
              </SimpleGrid>
            )}
          </InView>
        </Box>
        <Box bg="gray.200" pt={16}>
          <InView>
            {({ ref, inView }) => (
              <SimpleGrid
                ref={ref}
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
                  <motion.div
                    key={i}
                    initial={{ y: 60, opacity: 0 }}
                    animate={
                      inView
                        ? { y: 0, opacity: 1, transition: { delay: parser(i) } }
                        : { y: 60, opacity: 0 }
                    }
                  >
                    <Producto {...p} />
                  </motion.div>
                ))}
              </SimpleGrid>
            )}
          </InView>
        </Box>
      </Box>
    </Flex>
  )
}

Productos.propTypes = {}

export default Productos
