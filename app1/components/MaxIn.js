import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitchs from '../components/ToggleSwitch'
import TimePicker from '../components/TimePicker';

class MaxIn extends Component {
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
                fontWeight:'600',
                fontSize:20
            }}>Set time of maximum inactivity</Text>
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
              alignItems:'center',
              width:wp('90%'),
          }}>
          <Text>Suggestion: <Text style = {{ color:'#48A3E9'}}>1 Hours & 30 Minutes</Text></Text>
        
        <ToggleSwitchs />
        </View>
      </View>

          <TimePicker />

          <View style = {{
            flexDirection:'row',
            width:wp('50%'),
            alignSelf:'center',
            justifyContent:'space-around'
          }}>
          <Text style = {{
            fontSize:10,
          }}>HOURS</Text>
          <Text style = {{
            fontSize:10,
          }}>MINUTES</Text>
          </View>

        <View style={styles.ridesFriends}>
    <Text style={styles.numbers}>Set</Text>
    <View style={styles.verticleLine}></View>
    <Text style={styles.numbers}>Cancel</Text>
 </View>


        </View>
      );
    }
  }
  
  export default MaxIn;


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