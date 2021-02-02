/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import store  from "./store/store";

import { View, ActivityIndicator } from 'react-native';
import { 
  createAppContainer,
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  createSwitchNavigator
} from '@react-navigation/native';
// react-navigation


import { SafeAreaProvider } from 'react-native-safe-area-context';


import SplashScreen from './screens/SplashScreen';

// importing screens
import ScreensInit from './screens/ScreensInit';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

 

  useEffect(() => {
    setTimeout(async() => {
      
    }, 1000);
  }, []);

 
  return (
    <Provider store={store}>

    <NavigationContainer>
    <SafeAreaProvider>
        <ScreensInit/>     
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
