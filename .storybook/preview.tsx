import React from 'react';

import { theme } from '../src/theme';
import { StoryFn } from "@storybook/react";
import { ChakraProvider } from '@chakra-ui/react'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: { theme },
  },
  decorators: [
    (Story: StoryFn) => (
      <ChakraProvider theme={theme}>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <Story />
      </ChakraProvider>
    )
  ],
};

export default preview;
