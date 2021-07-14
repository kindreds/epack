import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { InView } from 'react-intersection-observer'
import { Flex, Text, Heading, Box, SimpleGrid, Link } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

const variantsX = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }
}
const variantsX2 = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' }
}

const Nosotros = (props) => {
  return (
    <>
      <Flex
        overflow="hidden"
        mx="auto"
        mt="-1px"
        bg="gray.200"
        id="servicios"
        align="center"
        justify="center"
        flexDir="column"
        py={{ base: 28, md: 32 }}
        // minH={{ base: '100vh', md: '700px' }}
        {...props}
      >
        <SimpleGrid
          gap={{ md: 5 }}
          alignItems="center"
          justifyContent="center"
          maxW={{ base: '85%', xl: 'container.xl' }}
          templateColumns={{
            base: 'minmax(0, 1fr)',
            md: '400px 400px',
            lg: 'minmax(0, 600px) 400px'
          }}
          templateRows={{
            base: 'minmax(0, 250px)',
            md: '400px',
            lg: 'calc(100vh * 0.8)'
          }}
        >
          <InView>
            {({ ref, inView }) => (
              <Box
                ref={ref}
                as={motion.div}
                variants={variantsX}
                animate={inView ? 'open' : 'closed'}
                h="full"
                w="full"
                mx="auto"
                mb={4}
                pos="relative"
              >
                <Image
                  src="/seriegrafia.png"
                  layout="fill"
                  alt="SERVICIO DE SERIGRAFÍA"
                  objectFit="contain"
                />
              </Box>
            )}
          </InView>
          <InView>
            {({ ref, inView }) => (
              <Box
                ref={ref}
                as={motion.div}
                variants={variantsX2}
                animate={inView ? 'open' : 'closed'}
              >
                <Heading
                  as="h1"
                  fontSize="3xl"
                  color="bgSecundary"
                  textAlign={{ base: 'center', md: 'left' }}
                  mb={4}
                >
                  SERVICIO DE SERIGRAFÍA
                </Heading>
                <Text
                  mb={4}
                  color="gray.700"
                  fontWeight="400"
                  textAlign="justify"
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  lineHeight={'taller'}
                >
                  EPACK, es la mejor opción en servicio de serigrafía,
                  estampado, tampografía y todo tipo de impresión, nuestro
                  taller cuenta con personal altamente calificado y solida
                  experticia en el rubro. Productos: Bolsas con asa, bolsas sin
                  asa, Bolsas Doy Pack, Bolsas con Asa Riñon, Stickers, etc
                </Text>
                <Button
                  as={Link}
                  w="fit-content"
                  size="lg"
                  isExternal
                  colorScheme="secundary"
                  display={{ base: 'none', md: 'flex' }}
                  href="https://bit.ly/serviciodeserigrafia"
                >
                  Contáctanos
                </Button>
              </Box>
            )}
          </InView>
        </SimpleGrid>
      </Flex>
    </>
  )
}

Nosotros.propTypes = {}

export default Nosotros
