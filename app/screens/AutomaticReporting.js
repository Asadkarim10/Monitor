import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import ToggleSwitchs from '../components/ToggleSwitch'
import { restAction, API_CONTS, storeData } from "../actions/constant";

class AutomaticReporting extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: "",
          user:'',
          name1:"",
          name2:'',
          number: null,
          number1:null,
          number2:null
    
        }
    
      }
    
      

  setUserData = async (authUserInit) => {
    await storeData("name", authUserInit.name);
    await storeData("number", authUserInit.number);
    await storeData("user", JSON.stringify(authUserInit));
  }

    
    render() {

        const toggleSwitch = () => setIsEnabled(  previousState => !previousState, functionWithoutArg() )

        console.log("hassam" + this.setUserData())
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
                <View style={{
                    flex: .7,
                }}>
                    <Header navigation = {this.props.navigation} />
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} >
                    <AntDesign
                        name="left" size={20} />
                       </ TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        paddingLeft: 20
                    }} >Automatic Reporting</Text>
                </View>

                <View style={{
                    flex: 8,

                }}>
                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .2,
                        marginBottom: 5,
                        paddingTop: 20
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            width: wp('90%'),
                            height: hp('5%'),
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}>
                            <View  style = {{
                                width:wp('90%'),
                                alignSelf:'center'
                            }} >
                                <Text style={{
                                    fontSize: 16
                                }}>Weekly Activity</Text>
                            </View>
                           
                        </View>

                        <View style = {{
                            flexDirection:'row',
                            width:wp('90%'),
                            alignSelf:'center',

                            justifyContent:'space-between',
                        }}>

                        <View style={{
                            width: wp('70%'),
                            alignSelf: 'center',
                        }}>
                            <Text style={{
                                color: '#9fcef1',
                                fontSize: 14
                            }}> Show weekly reports of most activity in a day </Text>
                        </View>
                        <View>
                                <ToggleSwitchs  
                             onValueChange={toggleSwitch}

                                />
                            </View>

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
                                }}>Update Contacts Daily</Text>
                            </View>
                         
                        </View>


                        <View style = {{
                            flexDirection:'row',
                            width: wp('90%'),

                            justifyContent:'space-between',
                            alignSelf:'center'
                        }}>
                        <View style={{
                            width: wp('75%'),
                            alignSelf: 'center',
                        
                            
                        }}>
                            <Text style={{
                                color: '#9fcef1'
                            }}>
Allow this app to update the contacts on daily basis                      </Text> 
 </View>
                        <View>
                        <ToggleSwitchs IDD={this.props.value} 
        
                        />
                        </View>

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
                                }}>Battery Alerts</Text>
                            </View>
                         
                        </View>


                        <View style = {{
                            flexDirection:'row',
                            width: wp('90%'),

                            justifyContent:'space-between',
                            alignSelf:'center'
                        }}>
                        <View style={{
                            width: wp('75%'),
                            alignSelf: 'center',
                        
                            
                        }}>
                            <Text style={{
                                color: '#9fcef1'
                            }}>
Send battery alert message to contacts if battery level drops below 10%                  
   </Text> 
 </View>

                        <View>
                        <ToggleSwitchs />
                        </View>

                        </View>
                    </View>

                    <View style={{
                        backgroundColor: '#fbfbfb',
                        flex: .2,
                        justifyContent: 'center',
                        marginBottom: 10
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
                                }}>Report Unusual Activity</Text>
                            </View>
                         
                        </View>


                        <View style = {{
                            flexDirection:'row',
                            width: wp('90%'),

                            justifyContent:'space-between',
                            alignSelf:'center'
                        }}>
                        <View style={{
                            width: wp('75%'),
                            alignSelf: 'center',
                        
                            
                        }}>
                            <Text style={{
                                color: '#9fcef1'
                            }}>
Report unusual activity including setting for check time and last activity of the day                   </Text> 
 </View>

                        <View>
                        <ToggleSwitchs />
                        </View>

                        </View>
                    </View>

                   

<View style = {{
    flex:.7,
}}>

</View>

                    

                   

                    


                

                </View>


                <View>

                </View>
            </View>
        );
    }
}

export default AutomaticReporting;