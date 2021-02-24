import SendSMS from 'react-native-sms'
// import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,StatusBar, ImageBackground, Image, ScrollView, Alert, Pressable } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


class SendSms extends React.Component {

     someFunction() {
    //     // const image = require('assets/your-image.jpg');
    //     // const metadata = resolveAssetSource(image);
    //     // const url = metadata.uri;
     
      
     
        SendSMS.send({
            body: 'The default body of the SMS!',
            recipients: ['0123456789', '9876543210'],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true,
            attachment: attachment
        }, (completed, cancelled, error) => {
     
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
     
        });
    }



    render() {
      return <View style = {{
          flex:1,
          justifyContent:'center',
          backgroundColor:'yellow'
          
      }}>
          <Text>Asad</Text>
      </View>;
    }
  }

  export default SendSms;