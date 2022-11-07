import {withRouter} from 'storybook-addon-react-router-v6';
import { setupStore } from "../store/store";
import { Pokemon } from '../components/pokemon';
import { Provider } from 'react-redux';

import { configureStore, createSlice } from '@reduxjs/toolkit';

export default {
  title: 'components/Pokemon',
  component: Pokemon,
  decorators: [(story:any) => <Provider store={setupStore()}>{story()}</Provider>, withRouter],
};

export const Default = () => <Pokemon />;






