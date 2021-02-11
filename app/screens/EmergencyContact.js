import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView, Alert } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SvgUri from 'react-native-svg-uri';
import testSvg from '../assets/test.svg';
import Header from '../components/Header'
import { restAction, API_CONTS, storeData } from "../actions/constant";
import ContactDetails from '../components/ContactDetails';
import RBSheet from "react-native-raw-bottom-sheet";
import { connect } from "react-redux";
//import {storeData} from "../actions/constant"

import { StatusBar } from 'react-native'
import Checkboxs from '../components/Checkboxs'
import RestDialogBox from "../components/RestDialogBox";
import { callAPI } from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';



class EmergencyContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: null,


    }

  }


  // setUser = () => {
  //   try {
  //       const restInit = {
  //           IS_LOADING: true,
  //           RETURN: false,
  //           IS_RETURN: false,
  //           RETURN_MESSAGE: "Something wrong",
  //       }
  //       this.props.restAction(restInit);
  //       const postsData = callAPI(API_CONTS.SIGNUP, "post", {
  //           "name": this.state.name, "number": this.state.number,

  //       }).then(res => {
  //           console.log(res)
  //           restInit.IS_LOADING = false;
  //           restInit.RETURN_MESSAGE = res.message;
  //           restInit.IS_RETURN = true;
  //           restInit.RETURN = res.return;

  //           this.props.restAction(restInit);
  //           if (res.return === true) {
  //               this.setState({
  //                   name: "",
  //                   number: "",

  //               })
  //           }

  //       });
  //   } catch (error) {
  //       this.props.restAction(
  //           {
  //               IS_LOADING: false,
  //               IS_RETURN: true,
  //               RETURN: false,
  //               RETURN_MESSAGE: "Network request failed"
  //           });

  //   }
  // }

  // setUserData = async (authUserInit) => {
  //   await storeData("name", authUserInit.name);
  //   updateAPIConfig(authUserInit.name);
  //   await storeData("number", authUserInit.number);
  //   await storeData("user", JSON.stringify(authUserInit));
  // }





  // OnSubmit = async () =>{
  // try{
  //   const initialstate = {
  //     name : this.state.name,
  //     number : this.state.number
  //   }
  //   await storeData("name",this.state.name);
  //   await storeData("number",this.state.number);
  //   this.setUserData(initialstate)

  // }


  // catch(error){
  //   console.log(error)
  // }
  // }

  // setUserData = async(UserInit)=>{
  //   await storeData("name",UserInit.name)
  //   await storeData("number",UserInit.number)
  // }

  // OnSet = async (value) => {
  //   try {
  //     await AsyncStorage.setItem('name', this.state.name)
  //     await AsyncStorage.setItem('number', this.state.number)

  //   } catch (e) {
  //     // saving error
  //   }
  // }



  onSubmit = async() => {
      try {
        // await AsyncStorage.setItem('name', this.state.name)
        // await AsyncStorage.setItem('number', this.state.number)

       await AsyncStorage.setItem("names",JSON.stringify({name:this.state.name, number:this.state.number}))
      } 

      catch (error) {
        console.log(error)
        // saving error
      }
    }

    
 

    


  // setUserData = async (authUserInit) => {
  //   await storeData("name", this.state.name);
  //   // updateAPIConfig(authUserInit.authToken);
  //   // await storeData("userAuthenticates", authUserInit.userAuthenticates);
  //   // await storeData("userType", authUserInit.userType);
  //   await storeData("number", this.state.number);
  //   // await storeData("user", JSON.stringify());
  // }
  //}

  //  getData = async () => {
  //   try {
  //     const name = await AsyncStorage.getItem('name')
  //     const UserName = JSON.parse(name)
  //     const number = await AsyncStorage.getItem('number')
  //     const UserNumber = JSON.parse(number)


  //     if(UserName !== null) {
  //       this.setState({name:UserName})
  //       // value previously stored
  //     }

  //     if (UserNumber!== null ) {
  //       console.log('enter your number')
  //      // this.setState({...UserNumber})
  //     }

  //   } 


  //   catch(e) {
  //     console.log(e)

  //     // error reading value
  //   }
  // }

    
  

  render() {
    //console.log(this.state.name)
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
        <View>
          <Header navigation={this.props.navigation} />
        </View>

        <View style={{
          // flex: .1,
          height: hp('8%'),
          width: wp("95%"),
          alignSelf: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} >
            <AntDesign
              name="left" size={20} />
          </ TouchableOpacity>
          <Text style={{
            fontSize: 20,
            paddingLeft: 20
          }} >Emergency Contact</Text>
        </View>

        <View style={{
          width: wp('90%'),
          alignSelf: 'center'
        }}>
          <Text style={{
            fontSize: 20,
            height: 50
          }}>Your Emergency Contacts</Text>
        </View>

        <View style={{
          width: wp('90%'),
          alignSelf: 'center'
        }}>
          <Text style={{
            color: '#48A3E9'
          }}>Set atleast three trusted contacts.Add from phone book or direct plugin contact number and name </Text>
        </View>

        <View style={{
          marginTop: 10
        }}>

          <View>
            <Text></Text>
          </View>

          <TouchableOpacity onPress={() => this.RBSheet.open()}
            style={{
              width: wp('85%'),
              alignSelf: 'center',
              height: 60,
              justifyContent: 'center',
              borderRadius: 7,

              borderColor: '#efeeef', borderLeftWidth: 9, borderTopWidth: 7,
              backgroundColor: '#f8f8f8'
            }}>
            <View style={{
              flexDirection: "row",
              width: wp('78%'),
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'space-between'
            }}>
              <Text style={{
                fontSize: 17,


              }}> {this.state.name}
              </Text>



              <Image
                source={require('../assets/test.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 10
        }}>

          <TouchableOpacity onPress={() => this.RBSheet.open()}
            style={{
              width: wp('85%'),
              alignSelf: 'center',
              height: 60,
              justifyContent: 'center',
              borderRadius: 7,
              borderColor: '#efeeef', borderLeftWidth: 7, borderTopWidth: 7,

              backgroundColor: '#f8f8f8'
            }}>
            <View style={{
              flexDirection: "row",
              width: wp('78%'),
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'space-between'
            }}>
              <Text style={{
                fontSize: 17,
              }}>{this.state.name}</Text>
              <Image
                source={require('../assets/test.png')}
              />
            </View>
          </TouchableOpacity>
        </View>


        <View style={{
          marginTop: 10
        }}>

          <TouchableOpacity onPress={() => this.RBSheet.open()}
            style={{
              width: wp('85%'),
              alignSelf: 'center',
              height: 60,
              justifyContent: 'center',
              borderRadius: 7,
              borderColor: '#efeeef', borderLeftWidth: 7, borderTopWidth: 7,
              backgroundColor: '#f8f8f8'
            }}>
            <View style={{
              flexDirection: "row",
              width: wp('80%'),
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'space-around'
            }}>

              <TextInput
                placeholder="Add a contact"
                onChangeText={(text) =>
                  this.setState({ assd: text })
                }
                style={{ height: 40, fontWeight: '700', paddingLeft: 6, width: wp('70%'), fontSize: 14 }} />
              <Image source={require('../assets/test.png')}
              />
            </View>
          </TouchableOpacity>
        </View>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}

          customStyles={{
            container: {
              alignItems: "center"
            }
          }}
        >
          <View style={{
            height: hp('5%'),
            justifyContent: 'center',
            width: wp('90%'),
            alignSelf: 'center',

          }}>
            <Text Name={this.state.name} style={{
              fontWeight: '600',
              fontSize: 20
            }}>Enter Contact Details</Text>
          </View>

          <View style={{
            width: wp('90%'),
            alignSelf: 'center'
          }}>
            <Text style={{
              fontSize: 11
            }}>CONTACT NAME</Text>
          </View>

          <View style={{
            height: hp('6%'),
            width: wp('90%'),
            marginTop: 7,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: '#f8f8f8',
            justifyContent: 'center'
          }}>
            <TextInput
              placeholder="e.g Danial"
              onChangeText={(val) =>
                this.setState({ name: val })
              }
              value={this.state.name}
              placeholderTextColor="#adadad"
              style={{
                paddingLeft: 20,
                fontSize: 14,
                fontWeight: '600'
              }}
            />
          </View>

          <View style={{
            width: wp('90%'),
            alignSelf: 'center',
            marginTop: 15,
          }}>
            <Text style={{
              fontSize: 11
            }}>CONTACT NUMBERS</Text>
          </View>

          <View style={{
            height: hp('6%'),
            width: wp('90%'),
            marginTop: 5,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: '#f8f8f8',
            justifyContent: 'center'
          }}>
            <TextInput
              placeholder="e.g ,+1 1234 567 890"
              placeholderTextColor="#adadad"
              onChangeText={(val) =>
                this.setState({ number: val })
              }
              value={this.state.number}


              style={{
                paddingLeft: 20,
                fontSize: 14,
                fontWeight: '600'

              }}
            />
          </View>


          <View style={styles.ridesFriends}>
            <TouchableOpacity onPress={() => this.onSubmit()}>
              <Text style={styles.numbers}>Set</Text>
            </ TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <Text style={styles.numbers}>Cancel</Text>
          </View>
        </RBSheet>
        <RestDialogBox />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
  restAction: payload => dispatch(restAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmergencyContact);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  ridesFriends: {
    paddingTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  numbers: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8fc7f1',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#b7b7b7',
  }
})