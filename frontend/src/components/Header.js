import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" bg="gray.100" py={4} px={8}>
      <Flex align="center">
        {/* School Logo */}
        <Image src="/path-to-school-logo.png" alt="School Logo" boxSize="50px" />

        <Spacer />

        {/* Navigation Menu */}
        <Flex as="nav" align="center">
          <Button variant="ghost" mr={3}>Home</Button>
          <Button variant="ghost" mr={3}>About Us</Button>
          <Button variant="ghost" mr={3}>Academics</Button>
          <Button variant="ghost" mr={3}>Student Life</Button>
          <Button variant="ghost" mr={3}>Admissions</Button>
          <Button variant="ghost" mr={3}>Contact</Button>
        </Flex>

        <Spacer />

        {/* Language Selector */}
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" mr={3}>
            Language
          </MenuButton>
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Spanish</MenuItem>
            {/* Add more languages as needed */}
          </MenuList>
        </Menu>

        {/* Accessibility Options */}
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
        />
      </Flex>
    </Box>
  );
};

export default Header;
