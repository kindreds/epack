import React from 'react'
// import PropTypes from 'prop-types'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Checkbox } from '@chakra-ui/checkbox'
import { Textarea } from '@chakra-ui/textarea'
import { Flex, Text, Box, Stack, Heading } from '@chakra-ui/layout'

const Contacto = (props) => {
  return (
    <Flex
      mx="auto"
      bg="white"
      id="contacto"
      justify="center"
      flexDir="column"
      pos={{ base: 'relative' }}
      py={{ base: 32, xl: 100 }}
      // minH={{ base: '100vh', md: '300px' }}
      align={{ base: 'center', xl: 'flex-start' }}
      {...props}
    >
      <Box
        zIndex="2"
        w="90%"
        bg="#e0e1e0"
        flexDir="column"
        top="-87px"
        right="15%"
        pos={{ xl: 'absolute' }}
        borderWidth={{ xl: 5 }}
        borderColor={{ xl: 'white' }}
        maxW={{ base: '90%', sm: '400px' }}
      >
        <Box bg="bgSecundary" py={5} pl={5} w="full">
          <Heading color="white">Contacto</Heading>
        </Box>
        <Stack mx={6} mt={8} mb={4}>
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
          <Textarea size="lg" bg="white" placeholder="Mensaje" resize="none" />

          <Flex mt={4}>
            <Checkbox
              mx={3}
              colorScheme="secundary"
              borderColor="bgSecundary"
            />
            <Text fontSize="sm" color="bgPrimary" fontWeight="medium">
              Acepta los terminos y condiciones
            </Text>
          </Flex>

          <Button colorScheme="secundary">ENVIAR MENSAJE</Button>
        </Stack>
      </Box>
      <Box
        zIndex="1"
        top={{ base: 80 }}
        right={{ base: 3, lg: 44 }}
        pos="absolute"
        h={{ base: '300px' }}
        w={{ base: '200px' }}
        // display={{ base: 'none', xl: 'block' }}
      >
        <img style={{ height: '100%', width: '100%' }} src="/puntos.png" />
      </Box>
    </Flex>
  )
}

Contacto.propTypes = {}

export default Contacto
