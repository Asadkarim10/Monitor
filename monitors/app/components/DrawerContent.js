import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, FontAwesome5, FontAwesome, Entypo, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Divider, Avatar, Title } from 'react-native-paper';

const { width } = Dimensions.get('window');

const DrawerContent = (props,navigation) => {


  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        flex: 1,
      }}>
       
      <TouchableOpacity onPress={() => props.navigation.navigate('Welcome')}>
      <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',
        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:4
      }}>
<Text style = {{
  fontSize:16
}}>Home</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Faq')}>
      <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',

        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:4
      }}>
<Text style = {{
  fontSize:16
}}>Frequently Asked Questions</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('AboutUs')}>


      <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',

        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:4
      }}>
<Text style = {{
  fontSize:16
}}>About Us</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicy')}>

      <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',

        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:4
      }}>
<Text style = {{
  fontSize:16
}}>Privacy Policy</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('TermConditions')}>

      <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',

        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:4
      }}>
<Text style = {{
  fontSize:16
}}>Terms & Conditions</Text>
      </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('FeedBack')}>


      <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',
        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:4
      }}>
<Text style = {{
  fontSize:16
}}>Feedback Form</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
     
<View style = {{
  height:hp('60%'),
  justifyContent:'flex-end'
}}>
  <View style = {{
        height:hp('5%'),
        width:wp('65%'),
        alignSelf:'center',
        justifyContent:'center',
        borderBottomColor:"#f9f9f9",
        borderBottomWidth:2
      }}>
<Text style = {{
  fontSize:16
}}>Settings</Text>
      </View>
</View>
</TouchableOpacity>

          









          
      

          </View>



        

      



      {/* last section */}
    </DrawerContentScrollView>

  );
}

export default DrawerContent;