import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import ToggleSwitchs from '../components/ToggleSwitch'

class Faq extends Component {
  
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor:'white'
        }}>
        <View style = {{
          flex:.2,
        }}>
           <Header  navigation = {this.props.navigation} /> 
        </View>

        <View style = {{
          flex:.1,
          justifyContent:'center',
        }}>
        <View style  = {{
          width:wp('90%'),
          alignSelf:'center',
          flexDirection:"row",

        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('TermConditions')} >
<AntDesign  name="arrowleft" size={30} />  
</TouchableOpacity>    
    <Text style = {{
      fontSize:22,
      paddingLeft:20,
      fontWeight:'600'
    }}>FAQS</Text>
        </View>
        </View>
{/* <ScrollView> */}
<View style = {{
  flex:1,
  justifyContent:'center'
}}>

        <View style = {{
          width:wp('90%'),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontWeight:'600',
            fontSize:25
          }}>Lorem Ipsum Dollar  sit amet, consectetur adipiscing elit</Text>
        </View>

        <View style = {{
          height:hp('5%'),
          justifyContent:'center',
          width:wp('85%'),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontWeight:'600',   
            fontSize:16
            }}>Lorem Ipsum Dollar</Text>
        </View>

        <View style = {{
           width:wp('85%'),
           alignSelf:'center'
        }}>
        <Text style = {{
          fontSize:17
        }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
        </View> 
  </View>


  <View style = {{
  flex:1,

  justifyContent:'center',
}}>

        <View style = {{
          width:wp('90%'),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontWeight:'600',
            fontSize:25
          }}>Lorem Ipsum Dollar  sit amet, consectetur adipiscing elit</Text>
        </View>

        <View style = {{
          height:hp('5%'),
          justifyContent:'center',
          width:wp('85%'),
          alignSelf:'center'
        }}>
          <Text style = {{
            fontWeight:'600',   
            fontSize:16
            }}>Lorem Ipsum Dollar</Text>
        </View>

        <View style = {{
           width:wp('85%'),
           alignSelf:'center'
        }}>
        <Text style = {{
          fontSize:17
        }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
        </View> 
  </View>
  {/* </ScrollView> */}
      </View>
    );
  }
}

export default Faq;