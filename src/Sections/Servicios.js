import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'

const Nosotros = (props) => {
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (inView) return setLoad(true)
  }, [inView])

  return (
    <>
      <Flex
        ref={ref}
        mx="auto"
        mt="-1px"
        bg="white"
        id="servicios"
        align="center"
        justify="center"
        flexDir="column"
        py={{ base: 28, md: 32 }}
        // minH={{ base: '100vh', md: '700px' }}
        {...props}
      >
        {load && (
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
                color="gray.700"
                fontWeight="400"
                fontSize={{ base: 'lg', lg: 'xl' }}
                lineHeight={is670pxOrLess ? 'short' : 'taller'}
              >
                EPACK, es la mejor opción en servicio de serigrafía, estampado,
                tampografía y todo tipo de impresión, nuestro taller cuenta con
                personal altamente calificado y solida experticia en el rubro.
                Productos: Bolsas con asa, bolsas sin asa, Bolsas Doy Pack,
                Bolsas con Asa Riñon, Stickers, etc
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
        )}
      </Flex>
    </>
  )
}

Nosotros.propTypes = {}

export default Nosotros
