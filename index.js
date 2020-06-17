/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import store from './src/store';
import {name as appName} from './app.json';
import {Splash} from './src/Screens';
import React from 'react';
console.disableYellowBox = true;

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
