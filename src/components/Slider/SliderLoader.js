import React from 'react'
import { Center } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

export const SliderLoader = () => (
  <Center minH="466px">
    <Spinner size="lg" />
  </Center>
)
