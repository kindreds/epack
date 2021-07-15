import React from 'react'
import { Box, Heading, Text, Flex, AspectRatio } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import InView from 'react-intersection-observer'

const UbicanosDesk = () => {
  return (
    <Box mt={-20} pb={20} id="ubicanos" w="full" bg="white">
      <Flex
        mt="-1px"
        mx="auto"
        pos="relative"
        flexDir="column"
        maxW={{ base: '1200px' }}
        align={{ base: 'center', xl: 'flex-start' }}
      >
        <Box
          top={0}
          left={-44}
          pos="absolute"
          h={{ base: '150px' }}
          w={{ base: '150px' }}
          display={{ base: 'none', lg: 'block' }}
        >
          <img
            src="/icono-cicular.png"
            style={{ height: '100%', width: '100%' }}
          />
        </Box>
        <InView>
          {({ ref, inView }) => (
            <Box ref={ref}>
              <Heading
                mb={2}
                as={motion.h1}
                color="primary.500"
                initial={{ y: '-100%', opacity: 0 }}
                animate={
                  inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }
                }
              >
                Ubícanos en:
              </Heading>
            </Box>
          )}
        </InView>
        <Flex>
          <Box w={{ base: 300 }} maxW="300px" mb={6} mr={5}>
            <InView>
              {({ ref, inView }) => (
                <div ref={ref}>
                  {inView ? (
                    <AspectRatio ratio={1} mb={4}>
                      <motion.iframe
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={
                          inView
                            ? { y: 0, opacity: 1 }
                            : { y: '-100%', opacity: 0 }
                        }
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5380387505425!2d-77.08415948601476!3d-12.075273445717206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c92a8c49324b%3A0x136ab8515df7ce5b!2sePack%20-%20Bolsas%20Ecol%C3%B3gicas%20Kraft!5e0!3m2!1ses!2spe!4v1626149018231!5m2!1ses!2spe"
                      />
                    </AspectRatio>
                  ) : null}
                </div>
              )}
            </InView>
            <Text textAlign="center" color="bgPrimary" fontWeight="semibold">
              San Miguel:
            </Text>
            <Text textAlign="center" color="bgSecundary" fontWeight="semibold">
              C.C. Shopping Center <br /> Av. La Mar 2275 Int. 77
            </Text>
          </Box>
          <Box w={{ base: 300 }} maxW="300px" mb={6}>
            <InView>
              {({ ref, inView }) => (
                <div ref={ref}>
                  {inView ? (
                    <AspectRatio ratio={1} mb={4}>
                      <motion.iframe
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={
                          inView
                            ? { y: 0, opacity: 1 }
                            : { y: '-100%', opacity: 0 }
                        }
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7001708113294!2d-77.10080348601603!3d-11.99523644420799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfe4e266385f%3A0xa6cc44d77672c755!2sEpack%20-%20Bolsas%20Ecol%C3%B3gicas!5e0!3m2!1ses!2spe!4v1626149095298!5m2!1ses!2spe"
                      />
                    </AspectRatio>
                  ) : null}
                </div>
              )}
            </InView>
            <Text textAlign="center" color="bgPrimary" fontWeight="semibold">
              San Martín de Porres:
            </Text>
            <Text textAlign="center" color="bgSecundary" fontWeight="semibold">
              Mz. Z Lt. 37 Urb. COOPIP
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default UbicanosDesk
