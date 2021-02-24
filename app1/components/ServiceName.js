import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ServiceName extends Component {
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
            }}>Set Local rapid response number</Text>
        </View>

        <View style= {{
            width:wp('90%'),
            alignSelf:'center'
        }}>
            <Text style = {{
                fontSize:11
            }}>SERVICE NAME</Text>
        </View>

        <View style = {{
            height:hp('6%'),
            width:wp('90%'),
            marginTop:7,
            borderRadius:10,
            alignSelf:'center',
            backgroundColor:'#f8f8f8',
            justifyContent:'center'
        }}>
            <TextInput  
            placeholder="e.g Emergency Number"
            placeholderTextColor="#adadad"
            style={{
                paddingLeft:20,
                fontSize:14,
                fontWeight:'600'
            }}
            />
        </View>

        <View style= {{
            width:wp('90%'),
            alignSelf:'center',
            marginTop:15,
        }}>
            <Text style = {{
                fontSize:11
            }}>CONTACT NUMBERS</Text>
        </View>

        <View style = {{
            height:hp('6%'),
            width:wp('90%'),
            marginTop:5,
            borderRadius:10,
            alignSelf:'center',
            backgroundColor:'#f8f8f8',
            justifyContent:'center'
        }}>
            <TextInput  
            placeholder="e.g,911"
            placeholderTextColor="#adadad"


            style={{
                paddingLeft:20,
                fontSize:14,
                fontWeight:'600'

            }}
            />
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
  
  export default ServiceName;


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