import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/modal'
import { AspectRatio } from '@chakra-ui/layout'

const ModalIframe = ({ isOpen, onClose }) => {
  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#000" p={0} m={0}>
        <ModalCloseButton
          size="lg"
          color="white"
          zIndex="1800"
          bg="bgPrimary"
          _hover={{ opacity: 0.7 }}
          transform="translate(12px, -8px)"
        />
        <ModalBody bg="#000" p={0} m={0} overflow="hidden" rounded="lg">
          {isOpen ? (
            <AspectRatio>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FgyIaYIGyNA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          ) : null}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

ModalIframe.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default ModalIframe
