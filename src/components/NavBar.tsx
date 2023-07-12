import React from 'react';
import { Flex } from '@chakra-ui/react';

interface NavbarProps {
  logo: React.ReactNode;
}

const navbarStyles = {
  w: '100%',
  h: 10,
  bg: 'blues.500',
};

export const ChakraNavBar: React.FC<NavbarProps> = ({logo}) => {
  return (
    <Flex as="nav" sx={navbarStyles}>
      {logo}
    </Flex>
	)
}; 