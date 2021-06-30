import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Link from '../Sidebar/Link'
import { Box } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'

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
      // bg="bgPrimary"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage="url(slide1_cp.webp)"
      bgColor="bgPrimary"
      bgBlendMode="darken"
      justifyContent="center"
      // shadow={'lg'}
      display={{ base: 'flex', lg: 'none' }}
    >
      <Link to="inicio">
        <Image width={150} height={50} src="/logo.png" objectFit="contain" />
      </Link>
      <Box pos="absolute" right={6}>
        <IconButton
          variant="unstyled"
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
