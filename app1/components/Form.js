import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Safar extends Component {
  render() {
    return (
      <View >
      <View style = {{
        height:hp('30%'),
        justifyContent:'center'
      }}>
      <Text style = {{
        fontSize:40,
        justifyContent:'center',
        alignSelf:'center',
        color:"#415762"
      }}> sefer axtarim</Text>
      </View>

      <View style = {{
        marginBottom:20,
        width:wp("90%"),
        alignSelf:"center",
        paddingLeft:10,
        borderRadius:10,
        // alignSelf:"center",
        backgroundColor:'#ebe9f4',
        // backgroundColor:'yellow',
        height:hp('10%'),
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5
      }}> 

      <Text style ={{
        color:'#c8c9d1',
        fontSize:25

      }} >Haradan</Text>
      <Text style ={{
        color:'#aaadcf',
        fontSize:30
      }}>Baki</Text>

      </View>

      <View style = {{
       marginBottom:20,
       width:wp("90%"),
       alignSelf:"center",
       paddingLeft:10,
       borderRadius:10,
       // alignSelf:"center",
       backgroundColor:'#ebe9f4',
       // backgroundColor:'yellow',
       height:hp('10%'),
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5

      }}> 

      <Text style ={{
        color:'#c8c9d1',
        fontSize:25
      }}>Hara</Text>
      <Text style ={{
        color:'#aaadcf',
        fontSize:30


      }}>Samqayit</Text>

      </View>


      <View style = {{
        width:wp("40%"),
        height:hp('10%'),
        backgroundColor:'#ebe9f4',
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center',
        marginLeft:30,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5
      }}> 
      <View style = {{
        width:wp('30%'),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
      }}>

<Icon name="calendar" size={30} color="#6c6f91" />    
     <Text style = {{
       fontSize:25,
       color:'#6c6f91',

     }} >Begun</Text>

      </View>
      </View>

      <View  style = {{
        width:wp('65%'),
        height:hp('35%'),
        borderRadius:15,
        alignSelf:'center',
        justifyContent:'center'
      }}>
        <TouchableOpacity style = {{
          backgroundColor:'#18a2b7',
          height:hp('5%'),
          justifyContent:'center',
          alignItems:'center',
          borderRadius:5
        }}>
          <Text style = {{
            color:'white',
            fontSize:25
          }}>Axtar</Text>
        </TouchableOpacity>

      </View>

      </View>
    );
  }
}

export default Safar;