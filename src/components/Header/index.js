import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Link from 'react-scroll/modules/components/Link'
import { ChatIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/layout'
import { IconButton, Button } from '@chakra-ui/button'

import useDrawer from '../../hooks/useDrawer'

const Header = () => {
  const { onOpen } = useDrawer()

  return (
    <Box
      py={2}
      top={0}
      w="full"
      pos="sticky"
      zIndex="88"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor="bgPrimary"
      bgBlendMode="darken"
      justifyContent="center"
      bgImage="url(slide1_cp.webp)"
      display={{ base: 'flex', lg: 'none' }}
    >
      <Link spy smooth to="contacto">
        <Button
          aria-label="contacto"
          top="13px"
          left="25px"
          pos="absolute"
          variant="unstyled"
          flexDirection="column"
          _focus={{ borderColor: 'transparent' }}
        >
          <ChatIcon color="gray.300" />
          <Text color="gray.300" fontWeight="500" fontSize="small">
            Contacto
          </Text>
        </Button>
      </Link>

      <Link spy smooth to="inicio">
        <Image width={150} height={50} src="/logo.png" objectFit="contain" />
      </Link>
      <Box pos="absolute" right={6}>
        <IconButton
          variant="unstyled"
          aria-label="Ubícanos"
          _focus={{ borderColor: 'transparent' }}
          onClick={() => onOpen('ubicanosDrawer')}
          icon={
            <Image
              width={50}
              height={50}
              src="/ubiIcon.png"
              objectFit="contain"
            />
          }
        />
      </Box>
    </Box>
  )
}

Header.propTypes = {
  HandleMaps: PropTypes.object
}

export default Header
