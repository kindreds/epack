import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Icon } from '@chakra-ui/icon'
import { Button, IconButton } from '@chakra-ui/button'
import {
  Box,
  Flex,
  Text,
  Link,
  Heading,
  SimpleGrid,
  Center
} from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import { useDisclosure } from '@chakra-ui/hooks'
import { useInView } from 'react-intersection-observer'

import Modal from '../components/Modal'

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
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Modal {...{ isOpen, onClose }} />
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
            <Center
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
                  src="/puntos_cp.webp"
                  alt="Personas conversando"
                  style={{ height: '100%', width: '100%' }}
                />
              </Box>
              <Image src="/3.png" layout="fill" objectFit="contain" />
              <PlayButton onClick={onOpen} />
            </Center>
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
                Kraft, Liner, Doy Pack, cajas de cartón microcorrugado,
                etiquetas y stickers con certificación FSC.
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
    </>
  )
}

function PlayButton(props) {
  return (
    <IconButton
      {...props}
      zIndex="1000"
      variant="unstyled"
      transform={{
        base: 'translate(-10%, -10%)',
        md: 'translate(-10%, -50%)',
        lg: 'translate(-10%, -80%)'
      }}
      _focus={{ borderColor: 'transparent' }}
      icon={
        <Icon
          fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
          as={PlayIcon}
          fill="bgPrimary"
          _hover={{ fill: 'primary.300' }}
          transition="fill 250ms ease-in-out"
        />
      }
    />
  )
}

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="play"
      className="prefix__svg-inline--fa prefix__fa-play prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
      />
    </svg>
  )
}

Nosotros.propTypes = {}

export default Nosotros
