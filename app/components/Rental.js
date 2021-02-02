import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'

const Rental = (props) => {
  return (

    <View>

<TouchableOpacity >
          <View style={styles.card}>
          
          <View style = {{
            width:wp('95%'),
            flexDirection:'row',
            marginLeft:25,
            justifyContent:'space-around',
            alignSelf:'center',
          }}>
            <View  style = {{
              width:wp('15%')
            }}>
            <Image
            source={require('../assets/home1.jpg')}
            style={{ height:hp("11%") , width: wp('25%') , borderRadius:10 }}
          />            
          </View>

          <View style = {{
            marginLeft:50,
            marginTop:5
          }}>

          <View style = {{
            width:wp('65%'),
          
          }}>
            <Text>Address 1211 jocarando boulevard, venice, fl 34292</Text>
            <View style = {{
              height:hp('3%'),
              justifyContent:'flex-end'
            }}>
            <Text style = {{
              
              fontSize:16,
              fontWeight:"700"
            }}>$1,000/M</Text>
            </View>
          </View>

<View style = {{
  flexDirection:"row",
  height:hp('3%'),
  alignContent:'center',
  justifyContent:'flex-start'
}}>
          <View style = {{
            justifyContent:'center'
          }}>
            <Text style = {{
              fontSize:12
            }}>Due , December 27 , 2020</Text>
          </View>
          <View>
            <TouchableOpacity  onPress={() => props.navigation.navigate('PayRent') }
            style = {{
              backgroundColor:"#26cd9b",
              justifyContent:'center',
              shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
              height:hp('4%'),
              marginTop:-10,
              borderRadius:3,
              marginLeft:13,
              width:wp("17%"),
              alignItems:'center'

              
            }}>
              <Text style = {{
                color:"white",
                fontSize:12,
                fontWeight:'600'
              }}>Pay Now!</Text>
            </TouchableOpacity>
          </View>
          </View>
            </View>
          </View>
          </View>
 </TouchableOpacity>


    </View>
  );
}

export default Rental;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
  
    header: {
      flex: 1,
      marginTop:35,
      shadowColor: "#000",
  shadowOffset: {
      width: 2,
      height: 8,
  },
  shadowOpacity: 5.25,
  shadowRadius: 6.84,
  
  elevation: 7,
  
      backgroundColor: '#2bc5c1',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    WelcomeNote: {
      flex: 1.5,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    Cards: {
      flex: 6,
      backgroundColor: 'yellow'
    },
  
  
    card: {
      backgroundColor: 'white',
      width: wp('90%'),
      height: hp('13%'),
      alignSelf: "center",
      borderRadius: 10,
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: .2,
      shadowRadius: 3,
      
    },
    img : {
      height:60,
      width:60
    },
  
    InventoryText: {
      fontSize: 20,
      fontWeight: '400',
    }
  
  
  });
  