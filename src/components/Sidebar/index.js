import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import { CloseIcon } from '@chakra-ui/icons'
import { Slide } from '@chakra-ui/transition'
import { IconButton } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Heading, Stack, Divider } from '@chakra-ui/layout'

const Sidebar = ({ isOpen, onClose }) => {
  const [posScroll, setPosScroll] = useState()
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 1 }}>
      <Box w="full" h="100vh" pos="relative" overflow="hidden" bg="bgPrimary">
        <Flex h="100%" mx="auto" maxW="70%" mt={28} flexDir="column">
          <IconButton
            mb={5}
            right={10}
            pos="absolute"
            onClick={onClose}
            icon={<CloseIcon />}
            style={{ zIndex: 5 }}
            colorScheme="secundary"
            top="calc(82px + 10px)"
          />
          <Link
            {...{ posScroll, setPosScroll }}
            to="inicio"
            onClose={onClose}
          />
          <Stack
            align="center"
            spacing={is670pxOrLess ? 2 : 3}
            divider={<Divider borderWidth={2} />}
          >
            <Heading
              mb={-4}
              as="h1"
              fontSize="5xl"
              variant="solid"
              textAlign="center"
              color="bgSecundary"
            >
              MENÚ
            </Heading>
            <Link
              to="nosotros"
              onClose={onClose}
              {...{ posScroll, setPosScroll }}
            >
              Nosotros
            </Link>
            <Link
              offset={-64}
              to="productos"
              {...{ posScroll, setPosScroll }}
              onClose={onClose}
            >
              Productos
            </Link>
            <Link
              to="servicios"
              onClose={onClose}
              {...{ posScroll, setPosScroll }}
            >
              Servicios
            </Link>
            <Link {...{ posScroll, setPosScroll }} to="blog" onClose={onClose}>
              Blog
            </Link>
            <Link
              to="testimonios"
              onClose={onClose}
              {...{ posScroll, setPosScroll }}
            >
              Testimonios
            </Link>
            <Link
              to="clientes"
              onClose={onClose}
              {...{ posScroll, setPosScroll }}
            >
              Clientes
            </Link>
            <Link
              to="contacto"
              onClose={onClose}
              {...{ posScroll, setPosScroll }}
            >
              Contacto
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Slide>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Sidebar
