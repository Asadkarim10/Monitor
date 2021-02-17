import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,Switch, TouchableOpacity, ImageBackground, Image, ScrollView,Alert } from 'react-native'


const ToggleSwitchs = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const Enable = () => setIsEnabled (!isEnabled)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState , Alert.alert("asad"));

 
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


