import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'

class Header extends Component {


  toggleClick = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
        <View style = {{
            backgroundColor:'#1f6eaa',
            justifyContent:'center',
            height:hp('7%'),

            

        }}>
            <View style = {{
                width:wp("100%"),
                alignSelf:'center',
                paddingLeft:10
            }}>
              <TouchableOpacity  onPress={() => this.toggleClick()} >
        <Icon name="bars" size={30} color="white" />    
        </TouchableOpacity>
          </View>
          </View>
    );
  }
}

export default Header;