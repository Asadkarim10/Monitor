import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,StatusBar, ImageBackground, Image, ScrollView, Alert, Pressable } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Checkboxs from '../components/Checkboxs'
import Icon from 'react-native-vector-icons/FontAwesome';


const GoodEvening = () => {
  return (

    <View style = {{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    }}>
      <View style = {{
            width:wp('98%'),
            alignSelf:'center',
            height:150,
            backgroundColor:'white',
            alignSelf:'center',
            justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        borderRadius:10
      }}>

      <View style = {{
          flexDirection:"row",
          justifyContent:'space-around'
      }}>

          <View style = {{
              width:wp('50%'),
              alignSelf:'center',
          }} >
        <Text style = {{
            color:'#1f6eaa',
            fontWeight:'700',
            fontSize:24
        }}>GOOD EVENING!</Text>
        <Text style = {{
            color:'#403f40',
            fontSize:19,
            fontWeight:'500',
            marginTop:13,
            
        }}>Your day with most movement activity was on <Text style = {{
            paddingTop:30,
            color:'#98cbf2'
        }}>Wednesday</Text>
        </Text>
        </View>

        <View style = {{
            width:wp('31%'),
        }}>
  <Image style = {{
      height:120,
      width:100
  }}  source={require('../assets/cycle.png')} />    
            </View>

        </View>
        </View>
      </View>
  );
}

export default GoodEvening;