import React from 'react'
import Image from 'next/image'
import { Logo } from '../SVGS'
import { Icon } from '@chakra-ui/icons'
import { Link as LinkS } from 'react-scroll'
import {
  Box,
  Grid,
  Text,
  Flex,
  Stack,
  HStack,
  Button,
  Divider,
  Heading,
  GridItem,
  SimpleGrid,
  IconButton,
  Link
} from '@chakra-ui/react'

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookMessenger
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
// import PropTypes from 'prop-types'

const LinkScroll = ({ to, children, ...props }) => (
  <LinkS spy smooth to={to} {...props}>
    {children}
  </LinkS>
)

const ButtonLink = ({ children }) => (
  <Button
    pl={4}
    mb={4}
    color="white"
    display="flex"
    variant="link"
    fontWeight="semibold"
    justifyContent="flex-start"
    fontSize={{ base: 'lg', xl: '2xl' }}
    leftIcon={<Icon as={Logo} fontSize="x-large" />}
  >
    {children}
  </Button>
)

const Footer = (props) => {
  return (
    <Grid
      w="full"
      bgColor="bgPrimary"
      bgBlendMode="darken"
      bgPosition={{ lg: 'top' }}
      bgSize={{ base: 'cover', lg: '100% 100%' }}
      bgRepeat={{ base: 'no-repeat', lg: 'unset' }}
      bgImage={{ base: 'url(slide1.png)', lg: 'url(slide2.png)' }}
      templateColumns={{
        lg: 'repeat(2, minmax(0, 1fr))',
        xl: 'repeat(3, minmax(0, 1fr))'
      }}
    >
      <GridItem colSpan={{ base: 1, xl: 2 }} pl="15%">
        <Box pt={10}>
          <Heading mb={4} fontSize="2xl" color="secundary.500">
            ENLACES RÁPIDOS
          </Heading>
          <SimpleGrid
            gap={{ base: 1, xl: 3 }}
            templateColumns={{
              base: 'repeat(2, 220px)',
              xl: 'repeat(3, 220px)'
            }}
          >
            <ButtonLink>
              <LinkScroll to="inicio">Inicio</LinkScroll>
            </ButtonLink>
            <ButtonLink>
              <LinkScroll to="blog">Blog</LinkScroll>
            </ButtonLink>
            <ButtonLink>Cotiza ahora</ButtonLink>
            <ButtonLink>
              <LinkScroll to="nosotros">Nosotros</LinkScroll>
            </ButtonLink>
            <ButtonLink>
              <LinkScroll offset={-200} to="contacto">
                Contacto
              </LinkScroll>
            </ButtonLink>
            <ButtonLink>Ingles</ButtonLink>
            <ButtonLink>
              <LinkScroll to="productos">Productos</LinkScroll>
            </ButtonLink>
            <ButtonLink>Webmail</ButtonLink>
            <ButtonLink>
              <Link href="mailto:hola@epack.pe">hola@epack.pe</Link>
            </ButtonLink>
            <ButtonLink>
              <LinkScroll to="servicios">Servicios</LinkScroll>
            </ButtonLink>
            <ButtonLink>Envía tu archivo</ButtonLink>
            <ButtonLink>
              <Link href="tel:+51950487398">+51 950 487 398</Link>
            </ButtonLink>
          </SimpleGrid>
        </Box>
      </GridItem>
      <GridItem bg="#4d50a2" py={10} pr="10%" pl="10%">
        <Box mr="20%">
          <Divider bg="bgSecundary" h={0.5} my={2} />

          <Stack divider={<Divider bg="bgSecundary" h={0.5} />}>
            <Box>
              <SimpleGrid
                alignItems="center"
                gap={5}
                templateColumns="100px 1fr"
              >
                <Box pos="relative" w="full" h="20px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/interbank-blanco.png"
                  />
                </Box>
                <Box>
                  <Text color="white" fontSize="sm" textAlign="right">
                    CUENTA CORRIENTE
                  </Text>
                  <Text color="white" fontSize="sm" textAlign="right">
                    200-3002052537
                  </Text>
                </Box>
              </SimpleGrid>
              <Text textAlign="right" fontWeight="semibold" color="white">
                T: Wali Asociados - R.U.C: 20605257161
              </Text>
            </Box>
            <Box>
              <SimpleGrid
                alignItems="center"
                gap={5}
                templateColumns="100px 1fr"
              >
                <Box pos="relative" w="full" h="20px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/bcp-blanco.png"
                  />
                </Box>
                <Box>
                  <Text color="white" fontSize="sm" textAlign="right">
                    CUENTA AHORROS
                  </Text>
                  <Text color="white" fontSize="sm" textAlign="right">
                    192-01799922-0-01
                  </Text>
                </Box>
              </SimpleGrid>
              <Text textAlign="right" fontWeight="semibold" color="white">
                T: Wayner Chávez Niño
              </Text>
            </Box>
            <Box>
              <SimpleGrid
                alignItems="center"
                gap={5}
                templateColumns="100px 1fr"
              >
                <Box pos="relative" w="full" h="20px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/bbva-blanco.png"
                  />
                </Box>
                <Box>
                  <Text color="white" fontSize="sm" textAlign="right">
                    CUENTA AHORROS
                  </Text>
                  <Text color="white" fontSize="sm" textAlign="right">
                    0011-0175-0200640503
                  </Text>
                </Box>
              </SimpleGrid>
              <Text textAlign="right" fontWeight="semibold" color="white">
                T: Wayner Chávez Niño
              </Text>
            </Box>
            <Box>
              <SimpleGrid alignItems="center" templateColumns="100px 1fr">
                <Box pos="relative" w="full" h="30px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/logo-bancos.png"
                  />
                </Box>
                <Text
                  fontWeight="semibold"
                  color="white"
                  fontSize="2xl"
                  textAlign="right"
                >
                  923 503 529
                </Text>
              </SimpleGrid>
              <Text textAlign="right" fontWeight="semibold" color="white">
                T: Wayner Chávez Niño
              </Text>
            </Box>
          </Stack>
          <Divider bg="bgSecundary" h={0.5} my={2} />
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 1, xl: 2 }} bg="#4d50a2">
        <Flex align="center" justify="center">
          <Box pos="relative" w={{ base: 20, xl: 32 }} h={20} mr={4}>
            <Image src="/logo.png" layout="fill" objectFit="contain" />
          </Box>
          <Heading color="white" fontSize={{ base: 'xl', xl: '2xl' }}>
            © Copyright 2021 by ando.pe
          </Heading>
        </Flex>
      </GridItem>
      <GridItem pr="20%">
        <Flex align="center" justify="center" h="full">
          <HStack mr={4}>
            <IconButton icon={<FaFacebookF fontSize="23px" />} />
            <IconButton icon={<FaInstagram fontSize="23px" />} />
            <IconButton icon={<FaFacebookMessenger fontSize="23px" />} />
            <IconButton icon={<MdEmail fontSize="23px" />} />
            <IconButton icon={<FaLinkedinIn fontSize="23px" />} />
          </HStack>
          <Icon as={FaWhatsapp} cursor="pointer" fontSize="50px" fill="white" />
        </Flex>
      </GridItem>
    </Grid>
  )
}

Footer.propTypes = {}

export default Footer
