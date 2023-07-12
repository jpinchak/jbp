import React from 'react';
import { Heading } from '@chakra-ui/react';

const logoStyles = {
  fontFamily: `'Pacifico', cursive`,
  color: 'white',
  fontSize: '32px',
  py: 1,
  pl: 3,
};

export const Logo: React.FC = () => {
  return (
    <Heading sx={logoStyles}>Jewels</Heading>
	)
}; 