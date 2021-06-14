import React from 'react'
// import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

const Testimonios = (props) => {
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  return (
    <Flex
      mx="auto"
      id="testimonios"
      justify="center"
      flexDir="column"
      maxW={{ base: '80%', md: '800px' }}
      {...props}
    >
      <Text
        mb={4}
        fontSize="lg"
        fontWeight="400"
        color="gray.700"
        lineHeight={is670pxOrLess ? 'short' : 'tall'}
        whiteSpace="normal"
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
