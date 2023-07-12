import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

interface ButtonProps {
	text: string;
	theme?: string;
	onClick: () => void;
}

interface ButtonGroupProps {
	buttons: ButtonProps[];
}

export const ChakraButton: React.FC<ButtonGroupProps> = ({buttons}) => {
  return (
		<ButtonGroup gap='2'>
			{buttons.map(button =>
				<Button bg={button.theme} onClick={button.onClick}>{button.text}</Button>
			)}
		</ButtonGroup>
	)
}; 