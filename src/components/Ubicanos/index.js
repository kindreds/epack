import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CloseIcon } from '@chakra-ui/icons'
import { Slide } from '@chakra-ui/transition'
import { IconButton } from '@chakra-ui/button'
import {
  Box,
  Flex,
  Heading,
  AspectRatio,
  SimpleGrid,
  Text
} from '@chakra-ui/layout'
import useDrawer from '../../hooks/useDrawer'

const Ubicanos = () => {
  const [load, setLoad] = useState(false)
  const { ubicanosDrawer: isOpen, onClose } = useDrawer()

  useEffect(() => {
    if (isOpen) setLoad(true)
  }, [isOpen])

  return (
    <Slide style={{ zIndex: 5 }} direction="top" in={isOpen}>
      <Box
        w="full"
        h="100vh"
        bg="white"
        pos="relative"
        pb="105px"
        pt="calc(82px + 15px)"
        overflow="auto"
      >
        <IconButton
          mb={5}
          right={10}
          pos="absolute"
          onClick={() => onClose('ubicanosDrawer')}
          icon={<CloseIcon />}
          top="calc(82px + 10px)"
          colorScheme="primary"
        />
        <Flex w="full" justify="center" flexDir="column">
          <Heading mb={5} fontSize="2xl" textAlign="center" color="bgPrimary">
            Ubícanos en:
          </Heading>

          <Box pos="relative" maxW="90%" mx="auto" mb={4}>
            <Box
              opacity="0.5"
              top={20}
              left={0}
              pos="absolute"
              h={{ base: '300px', md: '300px' }}
              w={{ base: '200px', md: '200px' }}
              // display={{ base: 'none', lg: 'block' }}
            >
              <img
                style={{ height: '100%', width: '100%' }}
                src="/puntos.png"
              />
            </Box>
            <Box mb={6}>
              <SimpleGrid
                mb={4}
                alignItems="center"
                templateColumns="120px minmax(0, 1fr)"
              >
                <Text color="bgPrimary" fontWeight="semibold">
                  San Miguel:
                </Text>
                <Text color="bgSecundary" fontWeight="semibold">
                  C.C. Shopping Center Av. La Mar 2275 Int. 77
                </Text>
              </SimpleGrid>
              {load && (
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    loading="lazy"
                    // style={{ display: isOpen ? 'block' : 'none' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.890185810459!2d-77.00020268578656!3d-12.119665546559304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f07aacf4bd%3A0xc51e56a54e01242b!2sAv.%20Aviaci%C3%B3n%204557%2C%20Surquillo%2015038!5e0!3m2!1ses!2spe!4v1623368284298!5m2!1ses!2spe"
                  />
                </AspectRatio>
              )}
            </Box>
            <Box>
              <SimpleGrid
                mb={4}
                alignItems="center"
                templateColumns="100px minmax(0, 1fr)"
              >
                <Text color="bgPrimary" fontWeight="semibold">
                  San Martín de Porres:
                </Text>
                <Text color="bgSecundary" fontWeight="semibold">
                  Mz. Z Lt. 37 Urb. COOPIP
                </Text>
              </SimpleGrid>
              {load && (
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    loading="lazy"
                    style={{ display: isOpen ? 'unset' : 'none' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.890185810459!2d-77.00020268578656!3d-12.119665546559304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f07aacf4bd%3A0xc51e56a54e01242b!2sAv.%20Aviaci%C3%B3n%204557%2C%20Surquillo%2015038!5e0!3m2!1ses!2spe!4v1623368284298!5m2!1ses!2spe"
                  />
                </AspectRatio>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Slide>
  )
}

Ubicanos.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Ubicanos
