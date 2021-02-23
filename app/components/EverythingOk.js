import React, { useState} from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,StatusBar, ImageBackground, Image, ScrollView, Alert, Pressable } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';






const EverythingOk = () => {
    const [animations, setAniminations] = useState('fadeInDown');

removePop = () => {
    console.log("asadkarim")
    setAniminations('fadeOutUp');
}
  return (
    
    <View style = {{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    }}>
      <View style = {{
            width:wp('98%'),
            alignSelf:'center',
            height:250,
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
              width:wp('90%'),
              alignSelf:'center',
          }} >
        <Text style = {{
            color:'#1f6eaa',
            fontWeight:'700',
            fontSize:24
        }}>IS EVERYTHING OKAY?</Text>
        <Text style = {{
            color:'#403f40',
            fontSize:15,
            fontWeight:'500',
            marginTop:10,
            
        }}>If the green button is not pressed within x minutes, then your contact persons will receive a text message</Text>
        </View>



        <View>
<TouchableOpacity  onPress={this.removePop}

style = {{
            width:wp('60%'),

            marginTop:20,
            borderRadius:10,
            height:50,
            justifyContent:'center',
            alignSelf:'center',
            backgroundColor:'#2dc040'
        }}>
<Text style = {{
                textAlign:'center',
                color:'white',
                fontWeight:'600'
            }}>
Yes! I'm fine!
</Text>

</TouchableOpacity>
</View>



{/* <View>

</View> */}


        </View>
        
      </View>
  );
}

export default EverythingOk;