import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'react-native'
import Issues from '../components/Issues';
import Header from '../components/Header'
import DropD from '../components/DropDown'
class LanguageSetting extends Component {
  constructor(props) {
    super(props);
    state = {
      language: 'java',
    };
  }
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
          <TouchableOpacity onPress={() => this.toggleClick()}>
            <AntDesign  name="arrowleft" size={20} />   
            </TouchableOpacity>
        


          <Text style = {{
          fontSize:20,
          paddingLeft:20
          }}
           >Language Settings</Text>
        </View>

       <View style = {{
         width:wp('90%'),
         alignSelf:'center',
       }}>
         <Text>Select a language</Text>
       </View>

     <DropD />
        
      </View>
    );
  }
}

export default LanguageSetting;