import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { ChakraButton } from './Button'
import './App.css';

function App() {

  const buttons = [{
    text: 'button1',
    theme: 'blue.500',
    onClick: () => console.log('button 1 clicked'),
  },
  {
    text: 'button2',
    theme: 'pink.200',
    onClick: () => console.log('button 2 clicked'),
  },]
  return (
    <div className="App">
      <Stack direction='column'>
        <Heading>Hello Julie</Heading>
        <ChakraButton buttons={buttons} />
      </Stack>
    </div>
  );
}

export default App;
