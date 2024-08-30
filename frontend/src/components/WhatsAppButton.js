import React from 'react';
import { IconButton, Link } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+1234567890'; // Replace with the actual WhatsApp number
  const message = 'Hello, I have a question about admissions.'; // Customize the pre-filled message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} isExternal>
      <IconButton
        icon={<FaWhatsapp />}
        colorScheme="green"
        size="lg"
        position="fixed"
        bottom="20px"
        right="20px"
        borderRadius="full"
        boxShadow="lg"
        aria-label="Contact via WhatsApp"
        _hover={{ transform: 'scale(1.1)' }}
        transition="all 0.2s"
      />
    </Link>
  );
};

export default WhatsAppButton;
