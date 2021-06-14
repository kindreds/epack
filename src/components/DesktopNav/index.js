import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Link as LinkS } from 'react-scroll'
import { useMediaQuery } from '@chakra-ui/react'
import { Stack, Flex, Box } from '@chakra-ui/layout'
import { GoLocation as LocationIcon } from 'react-icons/go'

import Link from '../Sidebar/Link'
import useScroll from '../../hooks/useScroll'

const DesktopNav = () => {
  const scroller = useScroll()
  const [posScroll, setPosScroll] = useState()
  const [isScrolling, setIsScrolling] = useState(0)
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  useEffect(() => {
    const onChange = () => setIsScrolling(window.scrollY)
    window.addEventListener('scroll', onChange)
    return () => window.removeEventListener('scroll', onChange)
  }, [])

  const isPrimary = isScrolling > 80
  const size = { base: 'md', xl: 'md' }

  return (
    <>
      <Box
        top={0}
        w="full"
        minH="60px"
        pos="sticky"
        bg="bgPrimary"
        style={{ zIndex: 4 }}
      >
        <Flex
          mx="auto"
          minH="60px"
          color="white"
          align="center"
          py={{ base: 4 }}
          px={{ base: 5 }}
          maxW={{
            base: '80%',
            md: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl'
          }}
        >
          <Flex
            as={LinkS}
            spy
            smooth
            flex={1}
            to="inicio"
            cursor="pointer"
            justify="flex-start"
          >
            {
              /* eslint-disable */
              isLargerThan1280 ? (
                <Image src="/logo.png" layout="fill" />
              ) : (
                <Image src="/isotipo.png" layout="fill" />
              )
              /* eslint-enable */
            }
          </Flex>

          <Stack
            align="center"
            direction={'row'}
            spacing={{ base: 2, md: '4' }}
          >
            <Link {...{ posScroll, setPosScroll }} to="inicio" fontSize={size}>
              Inicio
            </Link>

            <Link
              // offset={-92}
              to="nosotros"
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Nosotros
            </Link>

            <Link
              offset={-92}
              to="productos"
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Productos
            </Link>

            <Link
              // offset={-92}
              to="servicios"
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Servicios
            </Link>

            <Link
              to="blog"
              offset={-92}
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Blog
            </Link>

            <Link
              // offset={-92}
              to="testimonios"
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Testimonios
            </Link>

            <Link
              offset={-92}
              to="clientes"
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Clientes
            </Link>

            <Link
              offset={-180}
              to="contacto"
              fontSize={size}
              {...{ posScroll, setPosScroll }}
            >
              Contacto
            </Link>

            <Button
              color="bgPrimary"
              colorScheme="amarello"
              fontSize={{ base: 'md', xl: 'lg' }}
            >
              Chat en vivo
            </Button>
            <LinkS
              spy
              smooth
              to="ubicanos"
              offset={-100}
              onSetActive={setPosScroll}
              onClick={() => setPosScroll('ubicanos')}
            >
              <Button
                color="white"
                variant={posScroll === 'ubicanos' ? 'solid' : 'ghost'}
                colorScheme={
                  posScroll === 'ubicanos' ? 'secundary' : 'blackAlpha'
                }
                leftIcon={
                  <Icon
                    as={LocationIcon}
                    fontSize={{ base: '2xl', xl: 'x-large' }}
                  />
                }
              >
                Ubicanos
              </Button>
            </LinkS>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

DesktopNav.propTypes = {
  dark: PropTypes.bool
}

export default DesktopNav
