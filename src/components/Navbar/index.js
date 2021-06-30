import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, IconButton } from '@chakra-ui/button'
import { HamburgerIcon, Icon } from '@chakra-ui/icons'
import LinkS from 'react-scroll/modules/components/Link'
import { Box, SimpleGrid, Text } from '@chakra-ui/layout'

import useDrawer from '../../hooks/useDrawer'
import { BankIcon, MailIcon, HomeIcon, WspIcon } from '../../SVGS'

const Navbar = () => {
  const { onOpen, closeAll } = useDrawer()
  const [posScroll, setPosScroll] = useState(null)

  return (
    <>
      <SimpleGrid
        h={20}
        w="full"
        bottom="0"
        pos="sticky"
        top="inherit"
        zIndex="88"
        align="center"
        bg="bgSecundary"
        alignItems="center"
        opacity={{ lg: 0 }}
        pointerEvents={{ lg: 'none' }}
        // gap={5}
        borderTopRadius="xl"
        justifyContent="center"
        templateColumns={{
          base: 'minmax(0, 1fr) minmax(0, 1fr) 80px minmax(0, 1fr) minmax(0, 1fr)',
          ms: 'minmax(0, 1fr) minmax(0, 1fr) minmax(80px, 1fr)  minmax(0, 1fr) minmax(0, 1fr)'
        }}
      >
        <IconButton
          mx="auto"
          maxW="40px"
          colorScheme="primary"
          onClick={() => onOpen('sidebarDrawer')}
          icon={<HamburgerIcon fontSize="xl" />}
        />
        <Button
          spy
          smooth
          py={2}
          as={LinkS}
          offset={-100}
          to="inicio"
          color="white"
          display="flex"
          onClick={closeAll}
          variant="unstyled"
          colorScheme="primary"
          flexDirection="column"
          onSetActive={setPosScroll}
          onSetInactive={() => setPosScroll(null)}
          mr={{ base: 3, ms: 5 }}
        >
          <Icon color="white" as={HomeIcon} fontSize="4xl" />
          <Text color={posScroll === 'inicio' ? 'primary.500' : 'white'}>
            Inicio
          </Text>
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
            <Icon color="white" fontSize="6xl" as={WspIcon} fill="white" />
          </Box>
          <Text sx={{ transform: 'translateY(6px)' }}>Whatsapp</Text>
        </Button>
        <Button
          ml={{ base: 3, ms: 5 }}
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
      </SimpleGrid>
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
