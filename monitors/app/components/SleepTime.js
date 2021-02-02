import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TimePicker from '../components/TimePicker';

import ToggleSwitchs from './ToggleSwitch'

class SleepTime extends Component {
    render() {
      return (
          <View>
        <View style = {{
            height:hp('5%'),
            justifyContent:'center',
            width:wp('90%'),
            alignSelf:'center',
            
        }}>
            <Text style = {{
                fontWeight:'400',
                fontSize:20
            }}>Set Sleep/Mute time </Text>
        </View>

        <View style = {{
            alignSelf:'center',
            height:hp('3%')
        }}>
            <Text>Sleep time</Text>
        </View>

      
      <View style = {{
          height:hp('6%'),
          justifyContent:'center',
          backgroundColor:'#eeeeee'
      }}>
          <View style = {{
              flexDirection:'row',
              alignSelf:'center',
              justifyContent:'space-between',
              width:wp('90%')
          }}>
          <Text>Suggestion: <Text style = {{ color:'#48A3E9'}}>12:00 AM</Text></Text>
        <ToggleSwitchs />
        </View>
      </View>

          <TimePicker />


      <View
  style={{
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    marginTop:20,
    width:wp('80%'),
    alignSelf:'center'
  }}
/>

<View style = {{
            alignSelf:'center',
            height:hp('5%'),
            justifyContent:'center'
        }}>
            <Text>Wake Up time</Text>
        </View>

      
      <View style = {{
          height:hp('6%'),
          justifyContent:'center',
          backgroundColor:'#eeeeee'
      }}>
          <View style = {{
              flexDirection:'row',
              alignSelf:'center',
              justifyContent:'space-between',
              width:wp('90%')
          }}>
          <Text>Suggestion: <Text style = {{ color:'#48A3E9'}}>8:30 PM</Text></Text>
        <ToggleSwitchs />
        </View>
      </View>

          <TimePicker />

        <View style={styles.ridesFriends}>
    <Text style={styles.numbers}>Set</Text>
    <View style={styles.verticleLine}></View>
    <TouchableOpacity> 
        <Text style={styles.numbers}>Cancel</Text> 
    </TouchableOpacity>
 </View>


        </View>
      );
    }
  }
  
  export default SleepTime;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },

  ridesFriends: {
    paddingTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  numbers: {
    fontSize: 20,
    fontWeight:'600',
    color: '#8fc7f1',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#b7b7b7',
  }})