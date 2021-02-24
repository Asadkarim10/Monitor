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
import { NavigationContainer } from '@react-navigation/native';
// react-navigation

import AwesomeAlert from 'react-native-awesome-alerts';
import { SafeAreaProvider } from 'react-native-safe-area-context';




// importing screens
import ScreensInit from './screens/ScreensInit';

const App = () => {
  const [isAlert, setIsAlert] = React.useState(false);
  const [alertTitle, setAlertTitle] = React.useState("Title");
  const [alertDece, setAlertDece] = React.useState("Decsiptions");


  const hideAlert = () => {
    setIsAlert(false)
  } 

  useEffect(() => {

  }, []);
 
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
          <ScreensInit/>

          {
                    isAlert === true
                        ?
                        <AwesomeAlert
                            show={isAlert}
                            showProgress={false}
                            contentContainerStyle={{
                                width: "80%"
                            }}
                            title={alertTitle}
                            titleStyle={{
                                fontSize: 30
                            }}
                            message={alertDece}
                            messageStyle={{
                                fontSize: 20
                            }}
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={false}
                            showConfirmButton={true}
                            cancelText="No, cancel"
                            confirmText="Close"
                            confirmButtonStyle={{
                                width: "100%",
                                alignItems: "center"
                            }}
                            confirmButtonTextStyle={{
                                fontSize: 20
                            }}
                            confirmButtonColor={ "green"}
                            onCancelPressed={() => {
                                hideAlert();
                            }}
                            onConfirmPressed={() => {
                                hideAlert();
                            }}
                        />
                        : null
                }     
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}

export default App;
