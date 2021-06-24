import React from 'react'
// import PropTypes from 'prop-types'
import { Flex, Text, Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

const Testimonios = (props) => {
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  return (
    <Flex
      pos="relative"
      mx="auto"
      id="testimonios"
      justify="center"
      flexDir="column"
      maxW={{ base: '80%', md: '800px' }}
      {...props}
    >
      <Box
        opacity="0.3"
        top={{ base: 20, md: 0 }}
        left={-5}
        pos="absolute"
        h={{ base: '300px', md: '350px' }}
        w={{ base: '200px', md: '200px' }}
        // display={{ base: 'none', lg: 'block' }}
      >
        <img style={{ height: '100%', width: '100%' }} src="/puntos.png" />
      </Box>
      <Text
        mb={4}
        fontSize="lg"
        fontWeight="400"
        color="gray.700"
        textAlign="center"
        whiteSpace="normal"
        lineHeight={is670pxOrLess ? 'short' : 'tall'}
      >
        rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
        ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
        venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
        sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue
        velit cursus nunc
      </Text>
      <Text
        mt={4}
        fontSize="lg"
        color="bgPrimary"
        textAlign="center"
        fontWeight="semibold"
      >
        Ariana - Gerente General backus
      </Text>
    </Flex>
  )
}

Testimonios.propTypes = {}

export default Testimonios
