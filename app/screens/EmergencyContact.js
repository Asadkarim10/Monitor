import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput  , ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SvgUri from 'react-native-svg-uri';
import testSvg from '../assets/test.svg';
import Header from '../components/Header'
import { restAction, API_CONTS, storeData } from "../actions/constant";
import ContactDetails from '../components/ContactDetails';
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from '@react-native-async-storage/async-storage';



class EmergencyContact extends Component {
  constructor(props) {
    super(props);
  this.state = {
    items:"loading"
   

  }
}






  
  
  render() {

  

  



    OnClick = () => {
      try {
  
        const restInit = {
          IS_LOADING: true,
          RETURN: false,
          IS_RETURN: false,
          RETURN_MESSAGE: "Something wrong",
        }
        this.props.restAction(restInit);
        const postsData = callAPI(API_CONTS.LOGIN, "post", {
          "username": this.state.AddContact, "password": this.state.password
        }).then(res => {
          restInit.IS_LOADING = false;
          restInit.RETURN_MESSAGE = res.message;
          restInit.IS_RETURN = true;
          restInit.RETURN = res.return;
          if (res.return === false) {
            this.props.logout();
            this.props.restAction(restInit);
          } else {
            const authUserInit = {
              userType: res.users.usertype,
              authToken: res.token,
              userAuthenticates: true,
              id: res.users.id,
              user: res.users
            }
            restInit.IS_RETURN = false;
            this.setUserData(authUserInit);
            this.props.restAction(restInit);
            this.props.authUser(authUserInit)
          }
        });
      } catch (error) {
        this.props.restAction(
          {
            IS_LOADING: false,
            IS_RETURN: true,
            RETURN: false,
            RETURN_MESSAGE: "Network request failed"
          });
  
      }
    }
    setUserData = async (authUserInit) => {
      await storeData("keys", authUserInit.authToken);
      updateAPIConfig(authUserInit.authToken);
      await storeData("keyss", authUserInit.userAuthenticates);
      
    }



    return (
      <View style={{
          flex: 1,
          backgroundColor:'white'
        }}>
        <View>
         <Header navigation = {this.props.navigation} /> 
        </View>

        <View style={{
                    // flex: .1,
                    height:hp('8%'),
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

        <View style = {{
          width:wp('90%'),
          alignSelf:'center'
        }}>
            <Text style= {{
              fontSize:20,
              height:50
            }}>Your Emergency Contacts</Text>
        </View>

        <View style = {{
          width:wp('90%'),
          alignSelf:'center'
        }}>
            <Text style = {{
              color:'#48A3E9'
            }}>Set atleast three trusted contacts.Add from phone book or direct plugin contact number and name </Text>
        </View>

<View style = {{
  marginTop:10
}}>

<TouchableOpacity onPress={() => this.RBSheet.open()} 
style = {{
  width:wp('85%'),
  alignSelf:'center',
  height:60,
  justifyContent:'center',
  borderRadius:7,
 
  borderColor:'#efeeef',borderLeftWidth:9,borderTopWidth:7,
  backgroundColor:'#f8f8f8'
}}>
        <View style = {{
            flexDirection:"row",
            width:wp('78%'),
            alignSelf:'center',
            alignContent:'center',
            justifyContent:'space-between'
        }}>
            <Text style = {{
              fontSize:17,
              paddingLeft:10

            }}>Danial</Text>
             <SvgUri
    width="200"
    height="200"
    svgXmlData={testSvg}
  />
 <Image
          source={require('../assets/test.png')}  />    
               </View>
</TouchableOpacity>
</View>
<View style = {{
  marginTop:10
}}>

<TouchableOpacity onPress={() => this.RBSheet.open()} 
style = {{
  width:wp('85%'),
  alignSelf:'center',
  height:60,
  justifyContent:'center',
  borderRadius:7,
  borderColor:'#efeeef',borderLeftWidth:7,borderTopWidth:7,

  backgroundColor:'#f8f8f8'
}}>
        <View style = {{
            flexDirection:"row",
            width:wp('78%'),
            alignSelf:'center',
            alignContent:'center',
            justifyContent:'space-between'
        }}>
            <Text style = {{
              fontSize:17,
              paddingLeft:10
            }}>Patricia</Text>
    <Image
          source={require('../assets/test.png')}
        />      
          </View>
</TouchableOpacity>
</View>


<View style = {{
  marginTop:10
}}>

<TouchableOpacity   onPress={() => this.RBSheet.open()} 
style = {{
  width:wp('85%'),
  alignSelf:'center',
  height:60,
  justifyContent:'center',
  borderRadius:7,
  borderColor:'#efeeef',borderLeftWidth:7,borderTopWidth:7,
  backgroundColor:'#f8f8f8'
}}>
        <View style = {{
            flexDirection:"row",
            width:wp('80%'),
            alignSelf:'center',
            alignItems:'center',
            alignContent:'center',
            justifyContent:'space-around'
        }}>
            
            <TextInput
            placeholder="Add a contact"
            onChangeText={(text) =>
              this.setState({ AddContact: text })
            }
            style={{ height: 40, fontWeight:'700',  paddingLeft:6, width:wp('70%'), fontSize:14 }} />
 <Image  source={require('../assets/test.png')}
        />       
          </View>
</TouchableOpacity>
<Text> {this.state.storeData} </Text>
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
          <View style = {{
            height:hp('5%'),
            justifyContent:'center',
            width:wp('90%'),
            alignSelf:'center',
            
        }}>
            <Text style = {{
                fontWeight:'600',
                fontSize:20
            }}>Enter Contact Details</Text>
        </View>

        <View style= {{
            width:wp('90%'),
            alignSelf:'center'
        }}>
            <Text style = {{
                fontSize:11
            }}>CONTACT NAME</Text>
        </View>

        <View style = {{
            height:hp('6%'),
            width:wp('90%'),
            marginTop:7,
            borderRadius:10,
            alignSelf:'center',
            backgroundColor:'#f8f8f8',
            justifyContent:'center'
        }}>
            <TextInput  
            placeholder="e.g Danial"
            placeholderTextColor="#adadad"
            style={{
                paddingLeft:20,
                fontSize:14,
                fontWeight:'600'
            }}
            />
        </View>

        <View style= {{
            width:wp('90%'),
            alignSelf:'center',
            marginTop:15,
        }}>
            <Text style = {{
                fontSize:11
            }}>CONTACT NUMBERS</Text>
        </View>

        <View style = {{
            height:hp('6%'),
            width:wp('90%'),
            marginTop:5,
            borderRadius:10,
            alignSelf:'center',
            backgroundColor:'#f8f8f8',
            justifyContent:'center'
        }}>
            <TextInput  
            placeholder="e.g ,+1 1234 567 890"
            placeholderTextColor="#adadad"


            style={{
                paddingLeft:20,
                fontSize:14,
                fontWeight:'600'

            }}
            />
        </View>


        <View style={styles.ridesFriends}>
    <TouchableOpacity onPress={this.setUserData}>
    <Text style={styles.numbers}>Set</Text>
   </ TouchableOpacity>
    <View style={styles.verticleLine}></View>
    <Text style={styles.numbers}>Cancel</Text>
 </View>
        </RBSheet>
      </View>
    );
  }
}

export default EmergencyContact;


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
  fontWeight:'600',
  color: '#8fc7f1',
},
verticleLine: {
  height: '100%',
  width: 1,
  backgroundColor: '#b7b7b7',
}})