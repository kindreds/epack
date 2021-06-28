import React, { useEffect, useState } from 'react'
import d from 'next/dynamic'
import Image from 'next/image'
// import PropTypes from 'prop-types'

import { Button } from '@chakra-ui/button'
import { Skeleton } from '@chakra-ui/skeleton'
import { Flex, Text, Box, Stack, Heading } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'
import useDrawer from '../hooks/useDrawer'

const Input = d(() => import('@chakra-ui/input').then((e) => e.Input), {
  ssr: false,
  loading: () => <Skeleton h="48px" />
})
const Textarea = d(
  () => import('@chakra-ui/textarea').then((e) => e.Textarea),
  { ssr: false, loading: () => <Skeleton h="80px" /> }
)

const Contacto = (props) => {
  const { loadChunks } = useDrawer()
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (inView) setLoad(true)
    if (loadChunks) setLoad(true)
  }, [inView, loadChunks])

  return (
    <Flex
      ref={ref}
      mx="auto"
      bg="white"
      justify="center"
      flexDir="column"
      pos={{ base: 'relative' }}
      py={{ base: 32, xl: 100 }}
      // minH={{ base: '100vh', md: '300px' }}
      align={{ base: 'center', xl: 'flex-start' }}
      {...props}
    >
      {load ? (
        <Box
          w="90%"
          zIndex="2"
          top="-87px"
          right="15%"
          bg="#e0e1e0"
          flexDir="column"
          pos={{ xl: 'absolute' }}
          borderWidth={{ xl: 5 }}
          borderColor={{ xl: 'white' }}
          maxW={{ base: '90%', sm: '400px' }}
        >
          <Box bg="bgSecundary" py={5} pl={5} w="full">
            <Heading color="white">Contacto</Heading>
          </Box>
          <Stack minH="300px" spacing={4} mx={6} mt={8} mb={4}>
            <Input
              size="lg"
              bg="white"
              type="text"
              placeholder="Nombes y Apellidos"
            />
            <Input
              size="lg"
              bg="white"
              type="text"
              placeholder="Telefono de contacto"
            />
            <Input
              size="lg"
              bg="white"
              type="text"
              placeholder="Correo electrónico"
            />
            <Textarea
              size="lg"
              bg="white"
              placeholder="Mensaje"
              resize="none"
            />

            <Flex mt={4} aling="center">
              {/* <Checkbox
              mx={3}
              colorScheme="secundary"
              borderColor="bgSecundary"
            /> */}
              <Box mr={1} transform="translateY(0px)">
                <input type="checkbox" />
              </Box>
              <Text fontSize="sm" color="bgPrimary" fontWeight="medium">
                Acepta los terminos y condiciones
              </Text>
            </Flex>

            <Button colorScheme="secundary">ENVIAR MENSAJE</Button>
          </Stack>
        </Box>
      ) : null}
      <Box
        zIndex="1"
        top={{ base: 80 }}
        right={{ base: 3, lg: 44 }}
        pos="absolute"
        h={{ base: '300px' }}
        w={{ base: '200px' }}
        // display={{ base: 'none', xl: 'block' }}
      >
        <Image layout="fill" src="/puntos_cp.webp" />
      </Box>
    </Flex>
  )
}

Contacto.propTypes = {}

export default Contacto
