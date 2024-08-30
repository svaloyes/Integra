import React from 'react';
import { Box, Image, IconButton, Text, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            bg="rgba(0,0,0,0.5)"
            p={4}
          >
            <Text color="white" fontSize="xl" fontWeight="bold">
              {images[currentIndex].caption}
            </Text>
          </Box>
        </motion.div>
      </AnimatePresence>
      <Flex
        position="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="2"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            borderRadius="50%"
            bg={index === currentIndex ? "white" : "gray.500"}
            mx={1}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={prevImage}
        position="absolute"
        left="20px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        aria-label="Previous image"
        fontSize="3xl"
        bg="rgba(255,255,255,0.3)"
        _hover={{ bg: "rgba(255,255,255,0.5)" }}
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={nextImage}
        position="absolute"
        right="20px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        aria-label="Next image"
        fontSize="3xl"
        bg="rgba(255,255,255,0.3)"
        _hover={{ bg: "rgba(255,255,255,0.5)" }}
      />
    </Box>
  );
};

export default ImageCarousel;
