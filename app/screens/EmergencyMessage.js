import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import { connect } from "react-redux";
import ToggleSwitchs from '../components/ToggleSwitch'
import RestDialogBox from "../components/RestDialogBox";
import { callAPI } from "../api";
import { restAction, API_CONTS, storeData } from "../actions/constant";



class EmergencyMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        EmergencyMessage: null,
        switch1Value: false,
        
       
    }
}

handleChange(event) {
  const {EmergencyMessage} = event;
  let processedData = text;
  if(type==='text') {
      processedData = value.toUpperCase();
  } else if (type==='number') {
      processedData = value * 2;
  }
  this.setState({[EmergencyMessage]: processedData})
}

 

Save = () => {
 
  try {
    const restInit = {
      IS_LOADING: true,
      RETURN: false,
      IS_RETURN: false,
      RETURN_MESSAGE: "Something wrong",
    }
    this.props.restAction(restInit);
    const postsData = callAPI(API_CONTS.LOGIN, "post", {
      "EmergencyMessage": this.state.EmergencyMessage,
    }).then(res => {
      restInit.IS_LOADING = false;
      restInit.RETURN_MESSAGE = res.message;
      restInit.IS_RETURN = true;
      restInit.RETURN = res.return;
      if (res.return === false) {
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
  await storeData("EmergencyMessage", authUserInit.EmergencyMessage);
  updateAPIConfig(authUserInit.authToken);
  
}







  render() {


    let asad = toggleSwitch1 = () => {
      console.log('Switch 1 is: ')
    }
    



    return (
      <View style={{
          flex: 1,
          backgroundColor:'white'
        }}>
        <View>
         <Header  navigation = {this.props.navigation} /> 
        </View>

        <View style  = {{
          width:wp('90%'),
          alignSelf:'center',
          height:70,
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"flex-start"
        }}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Settings')}>
           <AntDesign  name="left" size={20} />   
           </TouchableOpacity>


          <Text style = {{
          fontSize:18,
          fontWeight:'600',
          paddingLeft:20
          }}
           >Emergency Message</Text>
        </View>

        
          <View style = {{
            height:hp('10%'),
            justifyContent:'center'
          }}>
        <View style = {{
          width:wp('90%'),
          justifyContent:'center',
          alignSelf:'center'
        }}>
          <View style = {{
            height:hp('4%'),
            width:wp('88%'),
            alignSelf:'center'
          }}>
            <Text style= {{
              fontSize:15,
            }}>Emergency Messages</Text>
            </View>
        </View>

        <View style = {{
          width:wp('88%'),
          alignSelf:'center'
        }}>
            <Text style = {{
              color:'#48A3E9'
            }}>Set atleast three trusted Contacts.Add from phone book or direct plugin contact number and name. </Text>
        </View>
        </View>
        <View style = {{
          width:wp('86%'),
          marginTop:10,
          borderRadius:10,
          backgroundColor:'#f8f8f8',
          alignSelf:'center',
          height:hp('25%'),
          alignItems:'center',
          justifyContent:'center',
          alignContent:'center',
          borderColor:'#efeeef',borderLeftWidth:9,borderTopWidth:7,

        }}>
          <View style = {{
            width:wp('75%'),
            alignSelf:"center",
            height:hp('21%'),

          }}>
            <TextInput 
  name="username" type="text" value={this.state.username} onChange={this.handleChange}        
  placeholder="Hi, I am not feeling well.Please come at my location ASAP! "
            placeholderTextColor="black"
            
            fontWeight="500"
            multiline={true}
            />
            </View>
        </View>

        <View style = {{
          height:hp('3%'),
          alignContent:'center',
          alignItems:'center',
          alignSelf:"center",
          width:wp('86%'),
          flexDirection:'row-reverse'
          
        }}>
            <Text style = {{
              color:'#807f80',
              fontWeight:'800'
            }}>50/160</Text>
        </View>

        
            
            <View style = {{
                height:hp('7%'),
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                alignSelf:'center',
                width:wp('90%')

            }}>
              <View>
            <Text style = {{
              fontSize:20
            }}>Send Location to recipient</Text>
            <Text style = {{
              color:'#9cccf1'
            }}>Location is only shared with contacts</Text>
            </View>


            <View style = {{
              paddingRight:20,
            }}
        
            >
            <ToggleSwitchs 
            onChange={asad}
            value = {this.props.switch1Value}
            
            />
            </View>

        </View>

      <View style = {{
        height:hp("17%"),
        justifyContent:'center'
      }}>
          <TouchableOpacity   onPress={() => this.Save()}
          style = {{
              width:wp('55%'),
              height:hp('5%'),
              alignSelf:'center',
              backgroundColor:'#2dc040',
              justifyContent:'center' ,
              alignContent:'center',
              borderRadius:5
          }}>
              <Text style = {{
                textAlign:'center',
                color:'white',
                fontWeight:'600'
              }}>Test Message</Text>
          </TouchableOpacity>
      </View>

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
)(EmergencyMessage);