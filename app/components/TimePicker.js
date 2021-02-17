import React, {Component} from 'react';
import { View, Text,Platform, StyleSheet, TouchableOpacity,TextInput,Input, ImageBackground, Image, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

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



// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity,TextInput,Input, ImageBackground, Image, ScrollView } from 'react-native'
// //import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class TimePicker extends Component {
  state = {
    date: new Date(),
    Show:false,
    Mode:'date'

  }

 

  render() {
    const { date } = this.state;
     onChange = (event, selectedDate) => {
   //   const currentDate = selectedDate || date;
       this.setState.Show(Platform.OS === 'ios');
       this.setState.Date({currentDate});
      };


     const showMode = (currentMode) => {
   this.setShow(true);
   this.setMode(currentMode);
  };


  state = {
    dateTimePickerVisible: false, 
    dateOrTimeValue: new Date(), 
};
    return (
      <View>
                <TouchableOpacity
                    onPress={() => this.setState({ dateTimePickerVisible: true, })}
                >
                    <Input
                        label='Shift Starts At'
                        placeholder={"01/01/2019 - 09:00 AM"}
                        editable={false}
                        value={this.state.dateOrTimeValue.toLocaleDateString()}
                    />
                </TouchableOpacity>

                {this.state.dateTimePickerVisible &&
                    (<DateTimePicker
                        mode={"datetime"} // THIS DOES NOT WORK ON ANDROID. IT DISPLAYS ONLY A DATE PICKER.
                        display='default' // Android Only  
                        is24Hour={false} // Android Only 
                        value={defaultShiftStartDateTime}

                        onChange={(event, value) => {
                            this.setState({
                                dateOrTimeValue: value,
                                dateTimePickerVisible: Platform.OS === 'ios' ? true : false,
                            });

                            if (event.type === "set")
                                console.log("value:" , value);
                        }}
                    />)}
            </View>

    );
  }
}


