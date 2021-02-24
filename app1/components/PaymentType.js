import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'


const PaymentType = () => {
    return (
<View>

<View style = {{
    height:hp('7%'),
    alignSelf:'center'
}}>
    <Text style = {{
        fontSize:26,
        fontWeight:'700'
    }}>Select a Payment Method</Text>
</View>

<View style = {{
    width:wp('60%'),
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('12%'),
             width:wp('28%'),
             justifyContent:'center',
             borderRadius:7,
             backgroundColor:'white',
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
                 width:'10%',
                 height:hp('7%'),
                 paddingTop:5,
                 justifyContent:'center',
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("4%") , width: wp('16%') }}
              />
</View>
<View style = {{
    alignSelf:'center',
    height:hp('3%'),
    justifyContent:'flex-end'
}}>
              <Text style = {{
                  fontSize:15
              }}>Paypal</Text>
          </View>   
             </View>   

<TouchableOpacity >
            
         <View style = {{
             height:hp('12%'),
             width:wp('28%'),
             justifyContent:'center',
             borderRadius:7,
             borderWidth:1,
             borderColor:'#26cd9b',
             backgroundColor:'white',
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
                 width:'10%',
                 paddingTop:5,
                 height:hp('7%'),
                 justifyContent:'center',
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("4%") , width: wp('16%') }}
              />
</View>
<View style = {{
    alignSelf:'center',
    height:hp('3%'),
    justifyContent:'flex-end'
}}>
              <Text style = {{
                  fontSize:15
              }}>Bank</Text>
          </View>   
             </View> 
             </TouchableOpacity>
             </View>

             
</View>
    );
  }
  
  export default PaymentType;
