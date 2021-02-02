// import ToggleSwitch from 'toggle-switch-react-native'
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
// //import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// class ToggleSwitchs extends Component {
    

//     render() {
//       return (
//         <View>
//             {/* <ToggleSwitch
//   isOn={true}
//   onColor="#459ee2"
//   offColor="#abcce6"
//   labelStyle={{ color: "black", fontWeight: "400" }}
//   size="small"
//   onToggle={isOn => this.setState("changed to : ", isOn)}
// /> */}


//         </View>
//       );
//     }
//   }
  
//   export default ToggleSwitchs;


import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,Switch, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'


const ToggleSwitchs = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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