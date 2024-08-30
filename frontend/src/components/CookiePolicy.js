import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const CookiePolicy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handlePreferenceChange = (key) => {
    setCookiePreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAcceptAll = () => {
    setCookiePreferences({ necessary: true, analytics: true, marketing: true });
    onClose();
  };

  const handleSavePreferences = () => {
    // Here you would typically save the preferences to localStorage or send them to a server
    console.log('Saving preferences:', cookiePreferences);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} position="fixed" bottom="20px" left="20px" colorScheme="blue">
        Cookie Settings
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cookie Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="stretch" spacing={4}>
              <Text>
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </Text>
              <Box>
                <Text fontWeight="bold">Manage Cookie Preferences:</Text>
                <VStack align="stretch" mt={2}>
                  <HStack justify="space-between">
                    <Text>Necessary (Always Active)</Text>
                    <Button isDisabled colorScheme="green" size="sm">
                      On
                    </Button>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Analytics</Text>
                    <Button
                      onClick={() => handlePreferenceChange('analytics')}
                      colorScheme={cookiePreferences.analytics ? 'green' : 'gray'}
                      size="sm"
                    >
                      {cookiePreferences.analytics ? 'On' : 'Off'}
                    </Button>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Marketing</Text>
                    <Button
                      onClick={() => handlePreferenceChange('marketing')}
                      colorScheme={cookiePreferences.marketing ? 'green' : 'gray'}
                      size="sm"
                    >
                      {cookiePreferences.marketing ? 'On' : 'Off'}
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAcceptAll}>
              Accept All
            </Button>
            <Button variant="ghost" onClick={handleSavePreferences}>Save Preferences</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CookiePolicy;
