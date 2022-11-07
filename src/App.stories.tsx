import { ComponentStory, ComponentMeta } from '@storybook/react'
import {withRouter} from 'storybook-addon-react-router-v6';
import { setupStore } from "./store/store";
import { App } from './App'
import { Provider } from 'react-redux';

import { configureStore, createSlice } from '@reduxjs/toolkit';

export default {
  title: 'Components/App',
  component: App,
  decorators: [(story) => <Provider store={setupStore()}>{story()}</Provider>, withRouter],
} as ComponentMeta<typeof App>





const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const Default = Template.bind({})
