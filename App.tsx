/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Navigation } from './src/navigation';
import { StatusBar } from 'react-native';

function App(): JSX.Element {
  return <>
  <StatusBar barStyle={'dark-content'}/>
  <Navigation /></>;
}

export default App;
