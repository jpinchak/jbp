import {theme} from '../src/theme';
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
    Story => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    )
  ],
};

export default preview;
