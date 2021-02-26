import React, { useEffect, useState } from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from "react-native";
import { connect } from 'react-redux';
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RestDialogBox from "../components/RestDialogBox";

import { restAction, API_CONTS, storeData } from "../actions/constant";
import { callAPI, updateAPIConfig } from "../api";
import { validateLogin, update, authUser } from "../actions/authAction";

const ModalUser = (props) => {

  const [name, setName] = useState(null)
  const [phone, setPhone] = useState(null)

  const nextRoute = () => {
    try {
      if (name === null) {
        props.restAction({
          IS_RETURN: true,
          RETURN: false,
          IS_LOADING: false,
          RETURN_MESSAGE: "Please enter User Name"
        })
      } else if (phone === false) {
        props.restAction({
          IS_RETURN: true,
          RETURN: false,
          IS_LOADING: false,
          RETURN_MESSAGE: "Please enter Phone Number"
        })
      }
      const restInit = {
        IS_LOADING: true,
        RETURN: false,
        IS_RETURN: false,
        RETURN_MESSAGE: "Something wrong",
      }
      props.restAction(restInit);
      const postsData = callAPI(API_CONTS.UPDATEUSER, "post", {
        "firstname": name,
        "primary_contact": phone,

      }).then(res => {
        restInit.IS_LOADING = false;
        restInit.RETURN_MESSAGE = res.message;
        restInit.IS_RETURN = true;
        restInit.RETURN = res.return;

        props.restAction(restInit);
        if (res.return === true) {
          setName(null)
          setPhone(null)
          props.validateLogin()
        }
        props.closemodal()
      });
    } catch (error) {
      props.restAction(
        {
          IS_LOADING: false,
          IS_RETURN: true,
          RETURN: false,
          RETURN_MESSAGE: "Network request failed"
        });

    }
  }




  return (
    <>
      {
        props.ismodalshow === true ?

          <>

            <Modal animationType="slide"
              transparent={true}
              visible={props.ismodalshow} onDismiss={props.closemodal}>

              <View style={{
                backgroundColor: '#DFDEDC',
                elevation: 4,
                width: wp("94%"),
                alignSelf: 'center',
                height: 300
              }} >


                <View>
                  <View style={styles.Header}>
                    <Image
                      source={require('../assets/Homepage/lxrymobility_logo.png')}
                      style={{ height: 40, width: wp("40%"), marginTop: 15 }}
                      resizeMode='contain'
                    />
                  </View>

                  <View style={{
                    width: wp('80%'),
                    height: 50,
                    marginTop: 30,
                    alignSelf: "center",
                    justifyContent: 'center',
                    alignItems: "center",
                  }}>
                    <View style={{
                      width: wp('80%'),
                      backgroundColor: 'white',
                      height: 50,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: "center",
                    }}>
                      <TextInput
                        placeholderTextColor='#707070'
                        onChangeText={(text) =>
                          (setName(text))}
                        value={name}
                        placeholder="User Name"
                        placeholderTextColor="#c0c0c0"
                        style={{
                          width: wp('80%'),
                          fontSize: 15,
                          paddingLeft: 15
                        }}
                      />
                    </View>



                  </View>

                  <View style={{
                    width: wp('80%'),
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: "center",
                    backgroundColor: 'white',
                    height: 50,
                    marginTop: 20,
                    flexDirection: 'row'
                  }}>
                    <Text style={{
                      color: '#272727',
                      borderRightWidth: 2,
                      borderRightColor: '#00000029',
                      paddingRight: 10
                    }}>+49</Text>
                    <TextInput
                      placeholderTextColor='#707070'
                      maxLength={10}
                      keyboardType='number-pad'
                      onChangeText={(text) =>
                        (setPhone(text))}
                      value={phone}
                      placeholder="Phone Number"
                      placeholderTextColor="#c0c0c0"
                      style={{
                        width: wp('60%'),
                        fontSize: 15
                      }}
                    />

                  </View>

                  <View style={{
                    width: wp("80%"),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    alignSelf: 'center'
                  }} >
                    <TouchableOpacity onPress={() => { props.closemodal() }} style={styles.Sbutton}>
                      < Text style={styles.butText}>CANCEL</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => { nextRoute() }} style={styles.Sbutton}>
                      < Text style={styles.butText}>SAVE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

          <RestDialogBox />

          </>

          : null
      }

    </>
  );
};


const styles = StyleSheet.create({

  modalText: {
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 4,
    fontSize: 24
  },
  Header: {
    backgroundColor: '#DFDEDC',
    width: wp('94%'),
    height: hp('8%'),
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center'
  },

  Invent: {
    height: hp('6%'),
    width: wp('90%'),
    justifyContent: 'center',
    paddingLeft: 10
  },

  Inventtext: {
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 20
  },
  Input: {
    height: hp('7%'),
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2bc5c1',
    paddingLeft: 10,
    width: wp("94%"),
    alignSelf: "center"
  },

  Sbutton: {
    height: 50,
    width: wp('35%'),
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  },
  butText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },

  InputV: {
    width: wp('55%'),
    height: hp('7%'),
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2bc5c1',
  },




});

const mapStateToProps = state => ({
  auth: state.auth,
  rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
  restAction: payload => dispatch(restAction(payload)),
  validateLogin: () => dispatch(validateLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalUser);