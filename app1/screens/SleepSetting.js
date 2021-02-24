import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import ToggleSwitchs from '../components/ToggleSwitch'
import RBSheet from "react-native-raw-bottom-sheet";
import SleepTime from '../components/SleepTime'
import NormalTime from '../components/NormalTime'

class SleepSetting extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor:'white'
        }}>
        <View>
           <Header navigation = {this.props.navigation} />
        </View>

        <View style  = {{
          width:wp('94%'),
          alignSelf:'center',
          height:70,
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"flex-start"
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
            <AntDesign  name="arrowleft" size={20} />   
        </TouchableOpacity>


          <Text style = {{
          fontSize:20,
          paddingLeft:20
          }}
           >Sleep Settings</Text>
        </View>


        <View style = {{
          width:wp('90%'),
          height:hp('6%'),
          justifyContent:'center',
          alignSelf:'center'
        }
        }>
            <Text style = {{
              fontSize:17
            }}>Set Sleep Timings</Text>
        </View>

        <View style = {{
          width:wp('90%'),
          height:hp('5%'),
          justifyContent:'center',
          alignSelf:'center'
        }}>
            <Text style = {{
              color:'#81bfef',
            }}>You'll not be asked any question nor any emergency message will be snet!</Text>
        </View>
       
        <TouchableOpacity onPress={() => this.RBSheet.open()}>

        <View style = {{
          backgroundColor:'#fbfbfb',
          height:hp('7%'),
          marginBottom:8,
          justifyContent:'center'
        }}>
          <View style = {{
            width:wp('90%'),
            alignSelf:'center'
          }}>
            <Text style = {{
              fontSize:16
            }}>Set sleep/mute time</Text>
            <Text style = {{
              color:'#8bc4ef',
              marginTop:7
            }}>8:30 PM - 10:00 AM </Text>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.RBNSheet.open()}>


        <View style = {{
          backgroundColor:'#fbfbfb',
          height:hp('7%'),
          marginBottom:8,
          justifyContent:'center'
        }}>
          <View style = {{
            width:wp('90%'),
            alignSelf:'center'
          }}>
            <Text style = {{
              fontSize:16
            }}>Normal go to bed time</Text>
            <Text style = {{
              color:'#8bc4ef',
              marginTop:7
            }}>8:30 PM - 10:00 AM </Text>
            </View>
        </View>
        </TouchableOpacity >

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
           height={700}
          openDuration={250}
          customStyles={{
            container: {
              alignItems: "center"
            }
          }}
        >
          <SleepTime />
        </RBSheet>

        <RBSheet
          ref={ref => {
            this.RBNSheet = ref;
          }}
           height={700}
          openDuration={250}
          customStyles={{
            container: {
              alignItems: "center"
            }
          }}
        >
          <NormalTime />
        </RBSheet>
        

        
      </View>
    );
  }
}

export default SleepSetting;