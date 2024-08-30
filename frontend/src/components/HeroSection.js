import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  Flex,
} from '@chakra-ui/react';
import ImageCarousel from './ImageCarousel';

const HeroSection = ({ carouselImages }) => {
  return (
    <Box
      as="section"
      position="relative"
      height="70vh"
      overflow="hidden"
    >
      <ImageCarousel images={carouselImages} />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      />
      <Container maxW="container.xl" position="relative" zIndex="2" height="100%">
        <VStack
          spacing={6}
          align="flex-start"
          color="white"
          textShadow="0 0 10px rgba(0,0,0,0.5)"
          justify="center"
          height="100%"
        >
          <Heading as="h1" size="2xl">
            Welcome to Our Elementary School
          </Heading>
          <Text fontSize="xl" maxW="2xl">
            Nurturing young minds, fostering creativity, and building a strong foundation for lifelong learning.
          </Text>
          <Button
            size="lg"
            colorScheme="blue"
            _hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
            transition="all 0.3s ease-in-out"
          >
            Apply Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
