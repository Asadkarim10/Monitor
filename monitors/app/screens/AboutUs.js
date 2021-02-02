import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import ToggleSwitchs from '../components/ToggleSwitch'

class AboutUs extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          alignItems: "center",
          backgroundColor:'white'
        }}>
        <View>
         <Header navigation = {this.props.navigation} /> 
        </View>


        <View style = {{
          flex:.2,
          justifyContent:'center'
        }}>
        <View style  = {{
          width:wp('90%'),
          flexDirection:"row",

        }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FeedBack')} >

<AntDesign  name="arrowleft" size={30} />    
</TouchableOpacity>  
    <Text style = {{
      fontSize:20,
      paddingLeft:20
    }}>About us</Text>
        </View>
        </View>
       
       <View style = {{
         flex:1,
       }}>
       
        <View  style = {{
          height:60,
          justifyContent:'center',
          width:wp('90%'),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontSize:20,
            fontWeight:'600'

          }}>Lorem Ipsum Dollar</Text>
        </View>

        <View style = {{
          width:wp('90%')
        }}>
       <Text style = {{
         fontSize:18
       }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
        </View>
        </View>


         
        <View style = {{
         flex:1,
       }}>
       
        <View  style = {{
          height:60,
          
          justifyContent:'center',
          width:wp('90%'),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontSize:20,
            fontWeight:'600'
          }}>Lorem Ipsum Dollar</Text>
        </View>

        <View style = {{
          width:wp('90%')
        }}>
       <Text style = {{
         fontSize:18
       }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
        </View>
        </View>
      </View>
    );
  }
}

export default AboutUs;