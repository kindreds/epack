import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import * as yup from 'yup'
import { Formik } from 'formik'
import { motion } from 'framer-motion'
import { Input } from '@chakra-ui/input'
import { useToast } from '@chakra-ui/toast'
import { Button } from '@chakra-ui/button'
import { Checkbox } from '@chakra-ui/checkbox'
import { Textarea } from '@chakra-ui/textarea'
import InView from 'react-intersection-observer'
import { Flex, Text, Box, Heading } from '@chakra-ui/layout'

import { enviarForm } from '../API/formulario'

const initialValues = {
  email: '',
  nombres: '',
  mensaje: '',
  nroCelular: '',
  condiciones: false
}

const validacion = yup.object().shape({
  condiciones: yup.bool().isTrue('Debes aceptar los terminos.'),
  email: yup
    .string()
    .email('Formato de correo invalido.')
    .required('Campo requerido.'),
  mensaje: yup
    .string()
    .min(4, 'Debes colocar un mensaje a enviar.')
    .required('Campo requerido.'),
  nroCelular: yup
    .string()
    .min(9, 'Debes colocar tu numero celular.')
    .required('Campo requerido.'),
  nombres: yup
    .string()
    .min(3, 'Debes colocar tu Nombres y Apellidos.')
    .required('Campo requerido.')
})

const ErrorMessage = ({ errors, touched, name }) => {
  const invalid = errors[name] && touched[name]
  return (
    <Box pb={3}>
      {invalid ? (
        <Text p={0} m={0} ml={1} color="red.500" fontSize="sm">
          {errors[name]}
        </Text>
      ) : null}
    </Box>
  )
}

const Contacto = (props) => {
  const toast = useToast()

  return (
    <Flex
      mx="auto"
      bg="white"
      justify="center"
      flexDir="column"
      pos={{ base: 'relative' }}
      py={{ base: 32, xl: 100 }}
      align={{ base: 'center', xl: 'flex-start' }}
      {...props}
    >
      <InView>
        {({ ref, inView }) => (
          <Box
            ref={ref}
            as={motion.div}
            inital={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
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
            <Formik
              initialValues={initialValues}
              validationSchema={validacion}
              onSubmit={({ condiciones, ...values }, { resetForm }) => {
                const payload = {
                  ...values,
                  dispositivo: '',
                  sistemaOperativo: ''
                }

                const SO = navigator.userAgent

                if (/iPad/i.test(SO)) payload.dispositivo = 'iPad'
                if (/iPhone/i.test(SO)) payload.dispositivo = 'iPhone'
                if (/Android/i.test(SO)) payload.dispositivo = 'Android'
                if (/Windows/i.test(SO)) payload.dispositivo = 'PC'

                if (/Linux/i.test(SO)) payload.sistemaOperativo = 'Linux'
                if (/OS/i.test(SO)) payload.sistemaOperativo = 'IOS'
                if (/Android/i.test(SO)) payload.sistemaOperativo = 'Android'
                if (/Windows/i.test(SO)) payload.sistemaOperativo = 'Windows'

                enviarForm(payload).then((data) => {
                  if (data) {
                    resetForm()
                    toast({
                      duration: 5000,
                      isClosable: true,
                      status: 'success',
                      title: 'Mensaje enviado',
                      description: 'Pronto nos pondremos en contacto contigo.'
                    })
                  } else {
                    toast({
                      duration: 5000,
                      isClosable: true,
                      status: 'error',
                      title: 'Ha ocurrido un error',
                      description: 'Por favor contacta al administrador.'
                    })
                  }
                })
              }}
            >
              {({
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                errors,
                touched
              }) => (
                <Box
                  mx={6}
                  mt={8}
                  mb={4}
                  as="form"
                  minH="300px"
                  onSubmit={handleSubmit}
                >
                  <Input
                    size="lg"
                    bg="white"
                    type="text"
                    name="nombres"
                    onBlur={handleBlur}
                    value={values.nombres}
                    onChange={handleChange}
                    placeholder="Nombres y Apellidos"
                  />
                  <ErrorMessage {...{ errors, touched, name: 'nombres' }} />
                  <Input
                    name="nroCelular"
                    size="lg"
                    bg="white"
                    type="text"
                    onBlur={handleBlur}
                    value={values.nroCelular}
                    onChange={handleChange}
                    placeholder="Teléfono de contacto"
                  />
                  <ErrorMessage {...{ errors, touched, name: 'nroCelular' }} />
                  <Input
                    name="email"
                    size="lg"
                    bg="white"
                    type="text"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                  />
                  <ErrorMessage {...{ errors, touched, name: 'email' }} />
                  <Textarea
                    size="lg"
                    bg="white"
                    name="mensaje"
                    resize="none"
                    placeholder="Mensaje"
                    onBlur={handleBlur}
                    value={values.mensaje}
                    onChange={handleChange}
                  />
                  <ErrorMessage {...{ errors, touched, name: 'mensaje' }} />

                  <Flex>
                    <Box mr={1} transform="translateY(0px)">
                      <Checkbox
                        name="condiciones"
                        onBlur={handleBlur}
                        colorScheme="secundary"
                        onChange={handleChange}
                        borderColor="bgSecundary"
                        checked={values.condiciones}
                      />
                    </Box>
                    <Text
                      fontSize="sm"
                      color="bgPrimary"
                      fontWeight="medium"
                      transform="translateY(-3px)"
                    >
                      Acepta los terminos y condiciones
                    </Text>
                  </Flex>
                  <ErrorMessage {...{ errors, touched, name: 'condiciones' }} />

                  <Button w="full" type="submit" colorScheme="secundary">
                    ENVIAR MENSAJE
                  </Button>
                </Box>
              )}
            </Formik>
          </Box>
        )}
      </InView>
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
