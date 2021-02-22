import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import ToggleSwitchs from '../components/ToggleSwitch'
import GoodEvening from '../components/GoodEvening'
import * as Animatable from 'react-native-animatable';

class Settings extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>

                <View style={{
                    flex: .7,
                }}>
                    <Header navigation={this.props.navigation} />
                </View>

                 <View style = {{
          width:wp('98%'),
          height:400,
          flex:.1,
          marginLeft:4,
           zIndex: 5 
              }}>

        {/* <Animatable.Text
          animation="fadeInDown"
          delay={1500}
        >
        </Animatable.Text> */}
                  <GoodEvening />

</View>  


                <View style={{
                    flex: .7,
                    width: wp("95%"),
                    alignSelf: 'center',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>

                        <AntDesign
                            name="left" size={20} />

                    </TouchableOpacity>

                    <Text style={{
                        fontSize: 20,
                        paddingLeft: 20
                    }} >Settings</Text>

                </View>

                <View style={{
                    flex: 8,

                }}>
                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .3,
                        marginBottom: 5,
                        paddingTop: 20
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            //height: hp('5%'),
                            height: 45,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}>
                            <View  >
                                <Text style={{
                                    fontSize: 16
                                }}>Automatic monitoring</Text>
                            </View>
                            <View>
                                <ToggleSwitchs         
                                //   isOn={true}
                                //   onColor="green"
                                //   offColor="red"
                                //   label="Example label"
                                //   labelStyle={{ color: "black", fontWeight: "900" }}
                                //   size="large"
                                //   onToggle={isOn => console.log("changed to : ", isOn)}
                                />
                            </View>
                        </View>

                        <View style={{
                            width: wp('90%'),
                            paddingRight: 40,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                color: '#9fcef1',
                                fontSize: 16
                            }}>
                                Your activity will only be saved locally on your phone. When enabled, a standard message + your location will only be sent to your Emergency Contacts if your phone is not moved/used for x hours.
        </Text>
                        </View>
                    </View>


                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .2,
                        justifyContent: 'center',
                        marginBottom: 5
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                height: hp('4%'),
                                justifyContent: 'center'

                            }} >
                                <Text style={{
                                    fontSize: 16
                                }}>Your Emergency Contacts</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EmergencyContact')}>
                                    <AntDesign name="right" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            width: wp('90%'),
                            alignSelf: 'center',
                            paddingRight: 40
                        }}>
                            <Text style={{
                                color: '#9fcef1'
                            }}>
                                Add maximum 3 contact that can be called directly from the Home Screen. Those contact will also receive a message when the phone is not moved/used for x hours.        </Text>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .1,
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            alignSelf: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 5,

                        }}>
                            <View
                            >
                                <Text style={{
                                    fontSize: 16
                                }}>Emergency Message</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EmergencyMessage')}>
                                    <AntDesign name="right" size={12} />
                                </TouchableOpacity>

                            </View>
                        </View>


                    </View>



                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .2,
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>


                        <View style={{
                            width: wp("90%"),
                            height: hp('4%'),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 16
                            }}>SOS Settings</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            alignSelf: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: wp('80%')
                            }}>
                                <Text style={{
                                    color: '#48A3E9',
                                }}> Set time of your maximum inactivity and time of latest response by you!</Text>

                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SosSetting')}>
                                    <AntDesign name="right" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .2,
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>


                        <View style={{
                            width: wp("90%"),
                            height: hp('4%'),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 16
                            }}>Automatic Reporting</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            alignSelf: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={{
                                    color: '#48A3E9',
                                }}> Set things like weekly reports, updating contacts, unusual activity reporting etc</Text>

                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AutomaticReporting')}>
                                    <AntDesign name="right" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .2,
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>


                        <View style={{
                            width: wp("90%"),
                            height: hp('4%'),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 16
                            }}>Set Sleep Timings</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            alignSelf: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: wp('80%'),
                            }}>
                                <Text style={{
                                    color: '#48A3E9',
                                }}> You'll not be asked any question nor any emergency message will be set!</Text>

                            </View>
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SleepSetting')}>
                                    <AntDesign name="right" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                </View>


                <View>

                </View>
            </View>
        );
    }
}

export default Settings;


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white'
//     },
  
//     header: {
//       flex: 1,
//       marginTop: 35,
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 2,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 7,
  
//       elevation: 2,
  
  
  
//     },
//     WelcomeNote: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
  
  
  
  
  
  
//   });
  
  
  