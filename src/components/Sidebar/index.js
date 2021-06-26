import React, { useState } from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'

import Link from './Link'
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Heading, Stack, Divider } from '@chakra-ui/layout'

import useDrawer from '../../hooks/useDrawer'

const Slide = d(() => import('@chakra-ui/transition').then((e) => e.Slide), {
  ssr: false
})

const Sidebar = () => {
  const [posScroll, setPosScroll] = useState()
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')
  const { sidebarDrawer: isOpen, onClose } = useDrawer()

  const HandleClose = () => onClose('sidebarDrawer')

  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 5 }}>
      <Box
        w="full"
        h="100vh"
        pos="relative"
        overflow="hidden"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgColor="bgPrimary"
        bgBlendMode="darken"
        bgImage="url(slide1_cp.webp)"
      >
        <Flex h="100%" mx="auto" maxW="70%" mt={24} flexDir="column">
          <IconButton
            mb={5}
            right={10}
            pos="absolute"
            onClick={HandleClose}
            icon={<CloseIcon />}
            style={{ zIndex: 5 }}
            colorScheme="secundary"
            top="calc(82px + 10px)"
          />
          <Link
            isSidebar
            to="inicio"
            onClose={HandleClose}
            {...{ posScroll, setPosScroll }}
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
              isSidebar
              to="nosotros"
              onClose={HandleClose}
              {...{ posScroll, setPosScroll }}
            >
              Nosotros
            </Link>
            <Link
              isSidebar
              offset={-64}
              to="productos"
              {...{ posScroll, setPosScroll }}
              onClose={HandleClose}
            >
              Productos
            </Link>
            <Link
              isSidebar
              to="servicios"
              onClose={HandleClose}
              {...{ posScroll, setPosScroll }}
            >
              Servicios
            </Link>
            <Link
              isSidebar
              {...{ posScroll, setPosScroll }}
              to="blog"
              onClose={HandleClose}
            >
              Blog
            </Link>
            <Link
              isSidebar
              to="testimonios"
              onClose={HandleClose}
              {...{ posScroll, setPosScroll }}
            >
              Testimonios
            </Link>
            <Link
              isSidebar
              to="clientes"
              onClose={HandleClose}
              {...{ posScroll, setPosScroll }}
            >
              Clientes
            </Link>
            <Link
              isSidebar
              to="contacto"
              onClose={HandleClose}
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
