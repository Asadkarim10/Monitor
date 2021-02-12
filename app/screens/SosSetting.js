import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header'
import RBSheet from "react-native-raw-bottom-sheet";
import MaxIn from '../components/MaxIn'
import LatestResponse from '../components/LatestResponse'
//import ServiceName from '../components/ServiceName';


class SosSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceName: "",
      EmergencyNumber:'',
     

    }

  }


  // componentDidMount() {
  //   this.getData();
  // }




  // getData = async () => {
  //   try {
  //     const user = await AsyncStorage.getItem('EmergencyNumber')
  //     const userP = await JSON.parse(user)
  //     this.setState({ServiceName:userP.ServiceName})
  //      this.setState({EmergencyNumber:userP.EmergencyNumber})

  //   }
   
    

  //   catch (e)  {
  //     console.log(e)
  //   }
  // }  




  onSubmit = async() => {
    try {
     await AsyncStorage.setItem("EmergencyNumber",JSON.stringify({
       ServiceName:this.state.ServiceName, 
       EmergencyNumber:this.state.EmergencyNumber, }))
    //  this.setState({name1:name1})
    //  this.setState({name2:name2})


    } 

    catch (error) {
      console.log(error)
      // saving error
    }
  }




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
          {/* <ServiceName /> */}
          <View style = {{
            height:hp('5%'),
            justifyContent:'center',
            width:wp('90%'),
            alignSelf:'center',
            
        }}>
            <Text style = {{
                fontWeight:'600',
                fontSize:20
            }}>Set Local rapid response number</Text>
        </View>

        <View style= {{
            width:wp('90%'),
            alignSelf:'center'
        }}>
            <Text style = {{
                fontSize:11
            }}>SERVICE NAME</Text>
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
            placeholder="e.g Emergency Number"
            placeholderTextColor="#adadad"
            onChangeText={(ServiceName) =>
              this.setState({ ServiceName: ServiceName })
            }
            value={this.state.ServiceName}
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
            placeholder="e.g,911"
            placeholderTextColor="#adadad"
            onChangeText={(EmergencyNumber) =>
              this.setState({ EmergencyNumber: EmergencyNumber })
            }
            value={this.state.EmergencyNumber}


            style={{
                paddingLeft:20,
                fontSize:14,
                fontWeight:'600'

            }}
            />
        </View>


        <View style={styles.ridesFriends}>
        <TouchableOpacity onPress={() => this.onSubmit()}>
              <Text style={styles.numbers}>Set</Text>
            </ TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity  onPress={() => this.RBRSheet.close()}>
            <Text style={styles.numbers}>Cancel</Text>
            </TouchableOpacity>
 </View>





        </RBSheet>


        
      </View>
    );
  }
}

export default SosSetting;


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