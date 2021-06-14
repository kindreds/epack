import { Box } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React from 'react'

const Divider = ({ h, bg }) => {
  return <Box h={h} bg={bg} />
}

Divider.propTypes = {
  h: PropTypes.object,
  bg: PropTypes.string
}

export default Divider
