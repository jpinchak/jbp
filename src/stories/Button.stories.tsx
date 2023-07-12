import {ChakraButton} from '../components/Button';

export default {
  title: 'Julie\'s Components/Button',
  component: ChakraButton,
};

const buttonParams = [
  {
    text: 'click me!',
    theme: 'pinks.200',
    onClick: () => console.log('clicked'),
  },
];

export const Primary = () => <ChakraButton buttons={buttonParams} />;