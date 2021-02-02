import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import RBSheet from "react-native-raw-bottom-sheet";
import MaxIn from '../components/MaxIn'
import LatestResponse from '../components/LatestResponse'
import ServiceName from '../components/ServiceName';


class SosSetting extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} >
            <AntDesign  name="left" size={20} />   
         </TouchableOpacity>


          <Text style = {{
          fontSize:20,
          paddingLeft:20
          }}
           >Sos Settings</Text>
        </View>

        <View style = {{
          width:wp('90%'),
          height:hp('4%'),

          alignSelf:'center'
        }
        }>
            <Text style = {{
              fontSize:17
            }}>Sos Settings</Text>
        </View>

        <View style = {{
          width:wp('90%'),
          height:hp('4%'),
          justifyContent:'center',
          alignSelf:'center'
        }}>
          <TouchableOpacity onPress={() => this.RBSheet.open()}>

            <Text style = {{
              color:'#81bfef',
            }}>Set time of your maximum inactivity and time to latest response by your! </Text>
        </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => this.RBBSheet.open()}>

        <View style = {{
          backgroundColor:'#fbfbfb',
          height:hp('7%'),
          marginBottom:8,
          justifyContent:'center'
        }}>
          <View style = {{
            width:wp('90%'),
            alignSelf:'center'
          }}>
            <Text style = {{
              fontSize:16
            }}>Set time of your maximum inactivity</Text>
            <Text style = {{
              color:'#8bc4ef',
              marginTop:7
            }}>1 Hour and 30 Minutes </Text>
            </View>
        </View>

        </TouchableOpacity>


            <TouchableOpacity onPress={() => this.RBSheet.open()} >
        <View style = {{
          backgroundColor:'#fbfbfb',
          height:hp('7%'),
          marginBottom:8,
          justifyContent:'center'
        }}>
          <View style = {{
            width:wp('90%'),
            alignSelf:'center'
          }}>
            <Text style = {{
              fontSize:16
            }}>Set time of latest response</Text>
            <Text style = {{
              color:'#8bc4ef',
              marginTop:7
            }}>10 minutes </Text>
            </View>
        </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.RBRSheet.open()} >
        <View style = {{
          backgroundColor:'#fbfbfb',
          height:hp('7%'),
          marginBottom:10,
          justifyContent:'center'
        }}>
          <View style = {{
            width:wp('90%'),
            alignSelf:'center'
          }}>
            <Text style = {{
              fontSize:16
            }}>Set Local rapid  repsonse number</Text>
            <Text style = {{
              color:'#8bc4ef',
              marginTop:7
            }}>For example 911,112 etc </Text>
            </View>
        </View>
        </TouchableOpacity>

        <RBSheet
          ref={ref => {
            this.RBBSheet = ref;
          }}
           height={300}
          openDuration={250}
          
          customStyles={{
            container: {
              alignItems: "center"
            }
          }}
        >
          <MaxIn />
        </RBSheet>

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
          <LatestResponse />
        </RBSheet>

        <RBSheet
          ref={ref => {
            this.RBRSheet = ref;
          }}
           height={300}
          openDuration={250}
          customStyles={{
            container: {
              alignItems: "center"
            }
          }}
        >
          <ServiceName />
        </RBSheet>


        
      </View>
    );
  }
}

export default SosSetting;