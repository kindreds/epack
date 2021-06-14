import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Link as LinkC } from '@chakra-ui/layout'
import { Link as LinkS } from 'react-scroll'

const Link = ({
  to,
  children,
  posScroll,
  setPosScroll,
  fontSize = '2xl',
  onClose = () => {},
  ...props
}) => {
  return (
    <LinkC
      spy
      smooth
      to={to}
      as={LinkS}
      onClick={() => {
        onClose()
        setPosScroll(to)
      }}
      onSetActive={setPosScroll}
      {...props}
    >
      <Heading
        fontSize={fontSize}
        fontWeight="semibold"
        color={posScroll === to ? 'secundary.500' : 'white'}
      >
        {children}
      </Heading>
    </LinkC>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.any,
  fontSize: PropTypes.any,
  posScroll: PropTypes.string,
  setPosScroll: PropTypes.func
}

export default Link
