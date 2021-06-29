import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/button'
import { Flex, Text, Heading, Box } from '@chakra-ui/layout'

const Hero = (props) => {
  return (
    <Flex
      {...props}
      mx="auto"
      zIndex="2"
      mt="-65px"
      id="inicio"
      align="center"
      justify="center"
      bgColor="bgPrimary"
      bgBlendMode="darken"
      minH={{ base: 'calc(100vh + 50px)' }}
      transform={{ lg: 'translateY(-50px)' }}
      bgSize={{
        base: 'cover',
        lg: 'calc(100vw + 180px) 90vh'
      }}
      bgRepeat={{ base: 'no-repeat', lg: 'repeat' }}
      bgPosition={{ base: '100% 5%', lg: '100% 30%' }}
      bgImage={{ base: 'url(slide1_cp.webp)', lg: 'url(slide2.png)' }}
    >
      <Flex
        align="center"
        justify="center"
        maxW={{ base: '90%' }}
        flexDir={{ base: 'column', md: 'row' }}
        transform={{ base: 'translateY(-50px)', lg: 'translateY(0px)' }}
      >
        <Flex maxW={{ base: '80%' }} flexDir="column" align="flex-start">
          <Heading
            as="h1"
            color="white"
            mb={{ base: 1, ms: 2 }}
            maxW={{ base: '330px', md: '700px' }}
            fontSize={{
              base: 'clamp(1rem, 9vw, 2rem)',
              sm: '4xl',
              md: '5xl',
              xl: '6xl'
            }}
          >
            BOLSAS DE PAPEL BIODEGRADABLES
          </Heading>
          <Text
            mb={1}
            color="white"
            fontWeight="100"
            className="hero-desc"
            fontSize={{ base: 'clamp(1rem, 5vw, 2rem)', ms: 'lg' }}
            display={{ base: 'block', sm: 'none' }}
          >
            Bolsas con asa, sin asa, Doy Pack, Cajas, Hang tag, Scker
          </Text>
          <Heading
            color="bgSecundary"
            fontSize={{
              base: 'clamp(1.3rem, 2.5vw, 2rem)',
              sm: '2xl',
              md: '4xl'
            }}
            className="hero-subtitle"
            mb={{ base: 2, ms: 3 }}
          >
            Pedido mínimo: 100und
          </Heading>
          <Button
            fontSize={'lg'}
            colorScheme="secundary"
            display={{ base: 'none', sm: 'block' }}
          >
            Contáctanos
          </Button>
        </Flex>
        <Box
          pos="relative"
          w={['calc(100vw - 50px)', 300, 350, 400, 600]}
          h={['calc(28vh)', 250, 350, 400, 600]}
        >
          <Image src="/1.png" objectFit="contain" layout="fill" />
        </Box>
      </Flex>
    </Flex>
  )
}

Hero.propTypes = {}

export default Hero
