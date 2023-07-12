import {Logo} from '../components';

export default {
  title: 'Julie\'s Components/Logo',
  component: Logo,
  parameters: {
    backgrounds: {default: 'blue', values: [{name: 'blue', value: "#06C5EF"}]}
  },
};

export const Primary = () => <Logo />;