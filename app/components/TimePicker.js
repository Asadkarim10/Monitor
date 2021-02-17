// import React, {useState} from 'react';
// import { View, Text,Platform, StyleSheet, TouchableOpacity,TextInput,Input, ImageBackground, Image, ScrollView } from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker';

//  const TimePicker = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

// //   const showMode = (currentMode) => {
// //     setShow(true);
// //     setMode(currentMode);
// //   };



//   const showTimepicker = (props) => {
//     showMode('time');
//   };

//   return (
//     <View style = {{
//         flex:1,
//         justifyContent:'center'
//     }}>
     
//       {/* <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View> */}
      
//         <DateTimePicker 
//         style = {{
//             height:100,
//             border:'none'}}
//         textColor="#48a3e9"
//         testID="dateTimePicker"
//         value={date}
//         mode={'time'}
//         is24Hour={true}
//         display="default"
//         //  onChange={onChange}
//         />
    
//     </View>
//   );
// };

// export default TimePicker;



import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Input, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import { shadow } from 'react-native-paper';
import Moment from 'react-moment';


export default class TimePicker extends Component {
constructor(){
  super()
this.state = {
  isVisible : shadow,
  chosenDate: moment(datetime).format('Date')
}
  
}

handlePicker = (datetime) => {
  this.setState({
    chosenDate:moment(datetime).format('MMMM, Do YYYY')
  })
}



render(){
  return(

<View>

    <DateTimePicker 
    onConfirm={this.handlePicker}
    mode={'time'}
    is24Hour={false}
    
    />




</View>

  )

  
}

}


