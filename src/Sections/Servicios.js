import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/layout'
import Divider from './../components/Divider/index'

const Nosotros = (props) => {
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  return (
    <>
      <Flex
        mx="auto"
        bg="white"
        id="servicios"
        align="center"
        justify="center"
        flexDir="column"
        py={{ base: 24, md: 32 }}
        // minH={{ base: '100vh', md: '700px' }}
        {...props}
      >
        <SimpleGrid
          maxW={{ base: '85%', xl: 'container.xl' }}
          alignItems="center"
          justifyContent="center"
          gap={{ md: 5 }}
          templateColumns={{
            base: 'minmax(0, 1fr)',
            md: '400px 400px',
            lg: '600px 450px'
          }}
          templateRows={{
            base: 'minmax(0, 250px)',
            md: '400px',
            lg: 'calc(100vh * 0.8)'
          }}
        >
          <Box
            h="full"
            w="full"
            mx="auto"
            mb={is670pxOrLess ? 2 : 4}
            pos="relative"
          >
            <Image src="/seriegrafia.png" layout="fill" objectFit="contain" />
          </Box>
          <Box>
            <Heading
              as="h1"
              fontSize="3xl"
              color="bgSecundary"
              textAlign={{ base: 'center', md: 'left' }}
              mb={is670pxOrLess ? 2 : 4}
            >
              SERVICIO DE SERIGRAFÍA
            </Heading>
            <Text
              mb={4}
              fontSize={{ base: 'lg', lg: '2xl' }}
              color="gray.700"
              fontWeight="400"
              lineHeight={is670pxOrLess ? 'short' : 'taller'}
            >
              EPACK, es la mejor opción en servicio de serigrafía, estampado,
              tampografía y todo tipo de impresión, nuestro taller cuenta con
              personal altamente calificado y solida experticia en el rubro.
              Productos: Bolsas con asa, bolsas sin asa, Bolsas Doy Pack, Bolsas
              con Asa Riñon, Stickers, etc
            </Text>
            <Button
              size="lg"
              colorScheme="secundary"
              display={{ base: 'none', md: 'flex' }}
            >
              Contáctanos
            </Button>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  )
}

Nosotros.propTypes = {}

export default Nosotros
