import React from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'
import { Heading, Link as LinkC } from '@chakra-ui/layout'

const LinkS = d(() => import('react-scroll/modules/components/Link'), {
  ssr: false
})

const Link = ({
  to,
  children,
  isSidebar,
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
        h={isSidebar ? 'calc(100vh * 0.045)' : 'unset'}
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
  isSidebar: PropTypes.bool,
  posScroll: PropTypes.string,
  setPosScroll: PropTypes.func
}

export default Link
