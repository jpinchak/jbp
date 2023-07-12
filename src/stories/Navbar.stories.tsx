import {ChakraNavBar} from '../components';

export default {
  title: 'Julie\'s Components/Navbar',
  component: ChakraNavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const logo = <h2>JEWELS</h2>;

export const Primary = () => <ChakraNavBar logo={logo} />;