import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,Switch, TouchableOpacity, ImageBackground, Image, ScrollView,Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OtherClass from './Child';

const ToggleSwitchs = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const Enable = () => setIsEnabled (!isEnabled)
  const toggleSwitch = () => setIsEnabled(  previousState => !previousState, handlerArgCall() )
  //const toggleWorks = console.log("asad")
  //const workingT = toggleSwitch;  toggleWorks;

  handlerArgCall = () => {
    //Calling a function of other class (with argument)
  new OtherClass().functionWithArg('About React');
  Alert.alert("asad")
  };

  // handlerSimpleCall = () => {
  //   //Calling a function of other class (without arguments)
  //   new OtherClass().functionWithoutArg();
  // };


  getData = async () => {
    try {
      const user = await AsyncStorage.getItem('names')
      const userP = await JSON.parse(user)
      this.setState({user:userP.name})
       this.setState({name1:userP.name1})
       this.setState({name2:userP.name2})

    }
   
    

    catch (e)  {
      console.log(e)
    }
  }  
console.log(isEnabled)

  return (
    <View>
     

<Switch
        trackColor={{ false: "#e2e2e2", true: "#b6daf5" }}
        thumbColor={isEnabled ? "#48a3e9" : "#878787"}
        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
        ios_backgroundColor="#e2e2e2"
        onValueChange={toggleSwitch}
       value={isEnabled}
      />


    </View>
  );
}

export default ToggleSwitchs;

// import React, { useState } from "react";
// import { View, Switch, StyleSheet } from "react-native";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;




