import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CookiePolicy from './components/CookiePolicy';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const carouselImages = [
    { src: '/images/science-fair.jpg', alt: 'School event 1', caption: 'Annual Science Fair' },
    { src: '/images/math-competition.jpg', alt: 'School accomplishment 1', caption: 'State Math Competition Winners' },
    { src: '/images/art-workshop.jpg', alt: 'Student activity 1', caption: 'Art and Creativity Workshop' },
    { src: '/images/kids-painting.jpg', alt: 'Students painting', caption: 'Creative Arts Class' },
  ];

  return (
    <ChakraProvider>
      <Box className="App">
        <Header />
        <Box as="main">
          <HeroSection carouselImages={carouselImages} />
          {/* Add other components here */}
        </Box>
        <CookiePolicy />
        <WhatsAppButton />
      </Box>
    </ChakraProvider>
  );
}

export default App;
