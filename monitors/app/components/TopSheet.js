import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AwesomeAlert from 'react-native-awesome-alerts';
 
export default class TopSheet extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  };
 
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
 
  render() {
    const {showAlert} = this.state;
 
    return (
      <View style={styles.container}>
 
        <Text>I'm AwesomeAlert</Text>
        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>Try me!</Text>
          </View>
        </TouchableOpacity>
 
        <AwesomeAlert 
          show={showAlert}
        //   showProgress={false}
          message={<View>

<View style = {{
            width:wp('96%'),
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


          </View>}
        //   closeOnTouchOutside={true}
        //   closeOnHardwareBackPress={false}
        //   showCancelButton={true}
        //   showConfirmButton={true}
        //   cancelText="No, cancel"
        //   confirmText="Yes, delete it"
        //   confirmButtonColor="#DD6B55"
        //   onCancelPressed={() => {
        //     this.hideAlert();
        //   }}
        //   onConfirmPressed={() => {
        //     this.hideAlert();
        //   }}
        />
      </View>
    );
  };
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});