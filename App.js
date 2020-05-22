/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import Screens from "./navigation/Screens";
import { argonTheme } from "./constants";
import {Provider as PaperProvider} from "react-native-paper"

const App: () => React$Node = () => {
  return (
    <>
     <Provider store={store}>
        <NavigationContainer>
        <PersistGate persistor={persistor}>
        <PaperProvider>
          <GalioProvider theme={argonTheme}>
          
            <Block flex>
              <Screens />
            </Block>
          </GalioProvider>
          </PaperProvider>
          </PersistGate>
        </NavigationContainer>
        </Provider>
    </>
  );
};


export default App;
