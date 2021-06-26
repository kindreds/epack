import React from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'

import { FaWhatsapp } from 'react-icons/fa'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { HamburgerIcon, Icon } from '@chakra-ui/icons'

import useDrawer from '../../hooks/useDrawer'
import { BankIcon, MailIcon, HomeIcon } from '../../SVGS'

const LinkS = d(() => import('react-scroll/modules/components/Link'), {
  ssr: false
})

const Navbar = () => {
  const { onOpen, closeAll } = useDrawer()

  return (
    <>
      <Flex
        h={20}
        w="full"
        bottom="0"
        pos="sticky"
        top="inherit"
        zIndex="88"
        align="center"
        bg="bgSecundary"
        borderTopRadius="xl"
        justify="space-around"
      >
        <IconButton
          onClick={() => onOpen('sidebarDrawer')}
          colorScheme="primary"
          icon={<HamburgerIcon fontSize="xl" />}
        />
        <Button
          spy
          smooth
          py={2}
          as={LinkS}
          to="inicio"
          color="white"
          display="flex"
          onClick={closeAll}
          variant="unstyled"
          colorScheme="primary"
          flexDirection="column"
        >
          <Icon color="white" as={HomeIcon} fontSize="4xl" />
          Inicio
        </Button>
        <Button
          py={2}
          color="white"
          display="flex"
          variant="unstyled"
          colorScheme="primary"
          flexDirection="column"
          sx={{ transform: 'translateY(-23px)' }}
        >
          <Box rounded="full" bg="bgSecundary" p={1}>
            <Icon color="white" fontSize="6xl" as={FaWhatsapp} />
          </Box>
          Whatsapp
        </Button>
        <Button
          py={2}
          color="white"
          display="flex"
          variant="unstyled"
          onClick={() => onOpen('bancosDrawer')}
          colorScheme="primary"
          flexDirection="column"
        >
          <Icon color="white" as={BankIcon} fontSize="4xl" />
          Bancos
        </Button>
        <Button
          py={2}
          color="white"
          display="flex"
          variant="unstyled"
          colorScheme="primary"
          flexDirection="column"
        >
          <Icon color="white" as={MailIcon} fontSize="4xl" />
          Correo
        </Button>
      </Flex>
    </>
  )
}

Navbar.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onOpenBan: PropTypes.func
}

export default Navbar
