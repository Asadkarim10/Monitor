import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import ToggleSwitchs from '../components/ToggleSwitch'
import RestDialogBox from "../components/RestDialogBox";
import { callAPI } from "../api";
import { restAction, API_CONTS } from "../actions/constant";
import { connect } from "react-redux";


class FeedBack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: null,
      Email: null,
      FeedBack: true,
      showAlert: true,
      showPassword: true,

    }
  }

  SaveFeedback = () => {
    try {

      const restInit = {
        IS_LOADING: true,
        RETURN: false,
        IS_RETURN: false,
        RETURN_MESSAGE: "Something wrong",
      }
      this.props.restAction(restInit);
      const postsData = callAPI(API_CONTS.LOGIN, "post", {
        "Fullname": this.state.email, "Email": this.state.Email, "FeedBack": this.state.FeedBack
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
    await storeData("name", authUserInit.name);
    updateAPIConfig(authUserInit.authToken);
    await storeData("userAuthenticates", authUserInit.userAuthenticates);
    await storeData("Email", authUserInit.Email);
    await storeData("FeedBack", authUserInit.FeedBack);
    await storeData("user", JSON.stringify(authUserInit.user));
  }




  render() {

   
    return (
      <View style={{
          flex:1,
          backgroundColor:'white'
          
        }}>
        <View>
           <Header navigation = {this.props.navigation} /> 
        </View>

        <View style  = {{
          width:wp('94%'),
          alignSelf:'center',
          height:70,
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"flex-start"
        }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')} >

            <AntDesign  name="arrowleft" size={25} />   
         </TouchableOpacity>



          <Text style = {{
          fontSize:20,
          paddingLeft:20,
          fontWeight:'600'
          }}
           >Feed Back Form</Text>
        </View>

        <View style = {{
          width:wp('85%'),
          height:hp('10%'),
          justifyContent:'center',
          alignSelf:'center'
        }}>
            <Text style = {{
              textAlign:'center'
            }}>
                Please Drop Us line and let us know how we can improve our service!
            </Text>
        </View>

        <View style = {{
          width:wp('85%'),
          alignSelf:'center',
          height:hp('6%'),
          justifyContent:'center',
          paddingLeft:20,
          marginTop:10,
          borderRadius:8,
          backgroundColor:'#f8f8f8',
          borderColor:'#efeeef',borderLeftWidth:9,borderTopWidth:7,

        }}>
            <TextInput 
            placeholder="Full Name"
            onChangeText={(text) =>
              this.setState({ FullName: text })}
            placeholderTextColor="#9b9b9b" />
        </View>
        <View style = {{
          width:wp('85%'),
          margin:10,
          alignSelf:'center',
          height:hp('6%'),
          justifyContent:'center',
          paddingLeft:20,
          borderRadius:8,
          backgroundColor:'#f8f8f8',
          borderColor:'#efeeef',borderLeftWidth:9,borderTopWidth:7,
        }}>
            <TextInput 
            placeholder="Email Address"
            onChangeText={(text) =>
              this.setState({ Email: text })}
            placeholderTextColor="#9b9b9b"  />
        </View>
        <View style = {{
          width:wp('85%'),
          alignSelf:'center',
          height:hp('35%'),
          paddingTop:10,
          paddingLeft:20,
          borderRadius:8,
          backgroundColor:'#f8f8f8',
          borderColor:'#ededed',borderLeftWidth:9,borderTopWidth:7,
        }}>
            <TextInput 
            placeholder="Feedback"
            onChangeText={(text) =>
              this.setState({ FeedBack: text })}
            multiline={true}
            placeholderTextColor="#9b9b9b" />
        </View>

        <View style = {{
          height:hp('20%'),
          justifyContent:'center',
        }}>
            <TouchableOpacity    onPress={() => this.SaveFeedback()}
            style = {{
              backgroundColor:'#2DC040',
              width:wp('50%'),
              height:hp('5%'),
              justifyContent:'center',
              alignSelf:"center",
              borderRadius:7


            }}>
                <Text style = {{
                  textAlign:'center',
                  color:'white',
                  fontSize:14,
                }}>Send</Text>
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
)(FeedBack);