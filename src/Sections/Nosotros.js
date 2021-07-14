import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { Flex, Text, Heading, Box, SimpleGrid, Link } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'
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
  const { ref, inView } = useInView()

  return (
    <Box overflow="hidden" id="nosotros" mx="auto" ref={ref}>
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
            mb={4}
            h="full"
            w="full"
            mx="auto"
            pos="relative"
            as={motion.div}
            variants={variantsX}
            animate={inView ? 'open' : 'closed'}
          >
            <Box
              top={0}
              pos="absolute"
              left={{ base: -5, md: -16 }}
              h={{ base: '200px', md: '300px' }}
              w={{ base: '100px', md: '200px' }}
              // display={{ base: 'none', lg: 'block' }}
            >
              <Image
                layout="fill"
                alt="Personas conversando"
                style={{ height: '100%', width: '100%' }}
                src="/puntos_cp.webp"
              />
            </Box>
            <Image src="/3.png" layout="fill" objectFit="contain" />
          </Box>
          <Box
            as={motion.div}
            variants={variantsX2}
            animate={inView ? 'open' : 'closed'}
          >
            <Heading
              as="h1"
              fontSize="3xl"
              color="bgSecundary"
              mb={4}
              textAlign={{ base: 'center', md: 'left' }}
            >
              SOBRE NOSOTROS
            </Heading>
            <Text
              mb={4}
              color="gray.700"
              fontWeight="400"
              textAlign="justify"
              fontSize={{ base: 'lg', lg: 'xl' }}
              lineHeight={'taller'}
            >
              Somos una empresa fabricante y distribuidora de bolsas de papel
              Kraft, Liner, Doy Pack, cajas de cartón microcorrugado, etiquetas
              y stickers con certificación FSC.
            </Text>
            <Button
              as={Link}
              isExternal
              w="fit-content"
              href="https://bit.ly/botonnosotros"
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
