import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from '../Sidebar/Link'
import { Box } from '@chakra-ui/layout'
import useDrawer from '../../hooks/useDrawer'
import { IconButton } from '@chakra-ui/button'

const Header = () => {
  const { onOpen } = useDrawer()
  const [isScrolling, setIsScrolling] = useState(0)

  useEffect(() => {
    const onChange = () => setIsScrolling(window.scrollY)
    window.addEventListener('scroll', onChange)
    return () => window.removeEventListener('scroll', onChange)
  }, [])

  const isPrimary = isScrolling > 80

  return (
    <Box
      py={2}
      top={0}
      w="full"
      pos="sticky"
      zIndex="modal"
      display="flex"
      bg="primary.500"
      justifyContent="center"
      shadow={isPrimary && 'lg'}
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
