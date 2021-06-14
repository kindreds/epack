import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'
import { FaWhatsapp } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { HamburgerIcon, Icon } from '@chakra-ui/icons'

import useDrawer from '../../hooks/useDrawer'
import { BankIcon, MailIcon, HomeIcon } from '../../SVGS'
import { Portal } from '@chakra-ui/portal'

const Navbar = () => {
  const { onOpen, onClose, closeAll, sidebarDrawer } = useDrawer()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset)
    })
  }, [])

  return (
    <>
      <Flex
        h={20}
        w="full"
        pos="sticky"
        top="inherit"
        bottom="0"
        zIndex="modal"
        align="center"
        bg="bgSecundary"
        borderTopRadius="xl"
        justify="space-around"
        // transform="translateY(-50%)"
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
      <Portal>
        <Sidebar
          isOpen={sidebarDrawer}
          onClose={() => onClose('sidebarDrawer')}
        />
      </Portal>
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
