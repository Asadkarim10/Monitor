import React, {useState} from 'react';
import { View, Text,Platform, StyleSheet, TouchableOpacity,TextInput,Input, ImageBackground, Image, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

 const TimePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [time, setTime] = useState('time')
  
  
  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
  };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };



  const showTimepicker = (props) => {
    showMode('time');
  };

  return (
    <View style = {{
        flex:1,
        justifyContent:'center'
    }}>
     
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      
        <DateTimePicker 
        style = {{
            height:100,
            border:'none'}}
        textColor="#48a3e9"
        testID="dateTimePicker"
       value={time}
       
        mode={'time'}
        is24Hour={true}
        display="default"
        // onChange={setState}
        />
    
    </View>
  );
};

export default TimePicker;






