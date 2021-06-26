import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/layout'

const Nosotros = (props) => {
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  return (
    <Box id="nosotros" mx="auto">
      <Flex
        bg="white"
        align="center"
        justify="center"
        flexDir="column"
        py={{ base: 32 }}
        // minH={{ base: '100vh', md: '700px' }}
        {...props}
      >
        <SimpleGrid
          gap={{ md: 5 }}
          alignItems="center"
          justifyContent="center"
          maxW={{ base: '80%', xl: 'container.xl' }}
          templateColumns={{
            base: 'minmax(0, 1fr)',
            md: 'minmax(0, 400px) 400px',
            lg: 'minmax(400px, 600px) 400px'
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
            pos="relative"
            mb={is670pxOrLess ? 2 : 4}
          >
            <Box
              top={0}
              left={{ base: -5, md: -16 }}
              pos="absolute"
              h={{ base: '200px', md: '300px' }}
              w={{ base: '100px', md: '200px' }}
              // display={{ base: 'none', lg: 'block' }}
            >
              <Image
                layout="fill"
                style={{ height: '100%', width: '100%' }}
                src="/puntos.png"
              />
            </Box>
            <Image src="/3.png" layout="fill" objectFit="contain" />
          </Box>
          <Box>
            <Heading
              as="h1"
              fontSize="3xl"
              color="bgSecundary"
              mb={is670pxOrLess ? 2 : 4}
              textAlign={{ base: 'center', md: 'left' }}
            >
              SOBRE NOSOTROS
            </Heading>
            <Text
              mb={4}
              color="gray.700"
              fontWeight="400"
              // textAlign="justify"
              fontSize={{ base: 'lg', lg: 'xl' }}
              lineHeight={is670pxOrLess ? 'short' : 'taller'}
            >
              Somos una empresa fabricante y distribuidora de bolsas de papel
              Kraft, Liner, Doy Pack, cajas de cartón microcorrugado, etiquetas
              y stickers con certificación FSC.
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
    </Box>
  )
}

Nosotros.propTypes = {}

export default Nosotros
