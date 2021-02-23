import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,Switch, TouchableOpacity, ImageBackground, Image, ScrollView,Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native'


import OtherClass from '../screens/Child';

const ToggleSwitchs = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const Enable = () => setIsEnabled (!isEnabled)
  const toggleSwitch = () => setIsEnabled(  previousState => !previousState, handlerSimpleCall() )
  //const toggleWorks = console.log("asad")
  //const workingT = toggleSwitch;  toggleWorks;

  // handlerArgCall = () => {
  //   //Calling a function of other class (with argument)
  // new OtherClass().functionWithArg('About React');
  // };

  handlerSimpleCall = () => {
    //Calling a function of other class (without arguments)
    new OtherClass().BatteryStatus();
  };


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

{/* <ToggleSwitch
  isOn={false}
  onColor="#81b0ff"
  offColor="#767577"
  trackColor={{ false: "#e2e2e2", true: "#b6daf5" }}
  thumbColor={isEnabled ? "#48a3e9" : "#878787"}

  width= '20px'
  style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
  size="small"

height= '20px'
  onToggle={isOn => handlerSimpleCall()}
/> */}


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




