import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Cat = () => {
  return (
      <View style = {{
        
          backgroundColor:'white',
          justifyContent:'center'
      }}>

<View style = {{
  justifyContent:'center',
  flexDirection:'row'
}}>
  <Text style = {{
    fontSize:28,
    fontWeight:'700'
  }}>Enter bank details</Text>
</View>


<View style = {{
              width:wp('84%'),
              alignSelf:'center',
              borderBottomWidth:1,
              height:hp('8%'),
              flexDirection:'column',
              justifyContent:'flex-end',
              borderBottomColor:'#a4abbd'
            }}>
<View style = {{
  flexDirection:'row',
  justifyContent:'center',
  alignSelf:'center',

}}>


<View>
  <TextInput 
  placeholderTextColor='#817f81'
  placeholder="Rounting Number"
  placeholderTextColor="#c0c0c0"
  style={{  width: wp('84%'),  height: hp('5%'), fontWeight: '500', fontSize: 17,  }}
  
  />

</View>


</View>
</View>



<View style = {{
              width:wp('84%'),
              alignSelf:'center',
              borderBottomWidth:1,
              height:hp('8%'),
              flexDirection:'column',
              justifyContent:'flex-end',
              borderBottomColor:'#a4abbd'
            }}>
<View style = {{
  flexDirection:'row',
  justifyContent:'center',
  alignSelf:'center',

}}>


<View>
  <TextInput 
  placeholderTextColor='#817f81'
  placeholder="Account Number"
  placeholderTextColor="#c0c0c0"
  style={{ width: wp('84%'),  height: hp('5%'), fontWeight: '500', fontSize: 17  }}
  
  />

</View>


</View>
</View>



<View style = {{
              width:wp('84%'),
              alignSelf:'center',
              borderBottomWidth:1,
              height:hp('8%'),
              flexDirection:'column',
              justifyContent:'flex-end',
              borderBottomColor:'#a4abbd'
            }}>
<View style = {{
  flexDirection:'row',
  justifyContent:'center',
  alignSelf:'center',

}}>


<View style = {{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
}}>
  <TextInput 
  placeholderTextColor='#817f81'
  placeholder="Account Type"
  placeholderTextColor="#c0c0c0"
  style={{ width: wp('80%'),  height: hp('5%'), fontWeight: '500', fontSize: 17  }}
  
  />
  <TouchableOpacity>
<Icon name="chevron-small-down"  size={20} />
</TouchableOpacity>
</View>



</View>
</View>



    </View>
  );
}

export default Cat;