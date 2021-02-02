import React, { Component } from 'react';
import { View, Text, StyleSheet,Linking, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native'
import Issues from '../components/Issues';
import Header from '../components/Header'
import Rental from '../components/Rental'
import YourProperties from '../components/YourProperties'

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>



        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="white"
          //Background color of statusBar only works for Android
          // translucent = {false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />


        <View style={styles.header}>

          <Header navigation = {this.props.navigation} />
          


          
        </View>
        <View style={styles.WelcomeNote}>

          <View style={{
            width: wp('90%'),
            alignSelf: 'center',

          }}>



                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: '600',
                  }}>Hey!</Text>
                <Text
                    style={{
                    fontSize: 24,
                    fontWeight: '400',
                  }}>Hope you are doing well today!!</Text>
          </View>
        </View>


        <View style={{
          flex: 7,
          marginTop: 50
        }}>

          <ScrollView>



          <View style = {{
            width:wp('90%'),
           // height:hp('7%'),
            alignSelf:'center',
              flexDirection:'row',

          }}>

             <View style = {{
               width:wp('22%'),
               backgroundColor:'#1f6eaa',
               height:hp('7.2%'),
              //  borderTopleftRadius:20,
              //  borderBottomleftRadius:20,
               justifyContent:"center",
               alignItems:'center' ,
               shadowColor: "#1f6eaa",
               shadowOffset: {
                 width: 0,
                 height: 2,
               },
               shadowOpacity: 0.28,
               shadowRadius: .00,
               
               elevation: 1,
               
               borderTopLeftRadius:10,
               borderBottomLeftRadius:10

                            
                

             }}> 
          <Ionicons name="call" size={30} color="white" />    
          </View>
             <View style = {{
               width:wp('60%'),
               backgroundColor:'white',
               paddingLeft:20,
               borderTopRightRadius:5,
               borderBottomRightRadius:5,
               justifyContent:'center',
                height:hp('7%'),
                shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: .25,
shadowRadius: 3.84,

elevation: 5,

             }}>
          <Text style = {{
            fontSize:20
          }}>Daniel</Text>
        

          </View>


          </View>




          <View style = {{
            width:wp('90%'),
            marginTop:10,
           // height:hp('7%'),
            alignSelf:'center',
              flexDirection:'row',

          }}>

             <View style = {{
               width:wp('22%'),
               backgroundColor:'#1f6eaa',
               height:hp('7.2%'),
              //  borderTopleftRadius:20,
              //  borderBottomleftRadius:20,
               justifyContent:"center",
               alignItems:'center' ,
               shadowColor: "#1f6eaa",
               shadowOffset: {
                 width: 0,
                 height: 2,
               },
               shadowOpacity: 0.28,
               shadowRadius: .00,
               
               elevation: 1,
               
               borderTopLeftRadius:10,
               borderBottomLeftRadius:10

                            
                

             }}> 
          <Ionicons name="call" size={30} color="white" />    
          </View>
             <View style = {{
               width:wp('60%'),
               backgroundColor:'white',
               paddingLeft:20,
               borderTopRightRadius:5,
               borderBottomRightRadius:5,
               justifyContent:'center',
                height:hp('7%'),
                shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: .25,
shadowRadius: 3.84,

elevation: 5,

             }}>
          <Text style = {{
            fontSize:20
          }}>Patricia</Text>
        

          </View>


          </View>


          <View style = {{
            width:wp('90%'),
            marginTop:10,
           // height:hp('7%'),
            alignSelf:'center',
              flexDirection:'row',

          }}>

             <View style = {{
               width:wp('22%'),
               backgroundColor:'#1f6eaa',
               height:hp('7.2%'),
              //  borderTopleftRadius:20,
              //  borderBottomleftRadius:20,
               justifyContent:"center",
               alignItems:'center' ,
               shadowColor: "#1f6eaa",
               shadowOffset: {
                 width: 0,
                 height: 2,
               },
               shadowOpacity: 0.28,
               shadowRadius: .00,
               
               elevation: 1,
               
               borderTopLeftRadius:10,
               borderBottomLeftRadius:10

                            
                

             }}> 
          <Ionicons name="call" size={30} color="white" />    
          </View>
             <View style = {{
               width:wp('60%'),
               backgroundColor:'white',
               paddingLeft:20,
               borderTopRightRadius:5,
               borderBottomRightRadius:5,
               justifyContent:'center',
                height:hp('7%'),
                shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: .25,
shadowRadius: 3.84,

elevation: 5,

             }}>
          <Text style = {{
            fontSize:20
          }}>Patricia</Text>
        

          </View>


          </View>



          </ScrollView>

        </View>


<View style = {{
  flex:2,
  alignSelf:'center'
}}>

  <TouchableOpacity  onPress={()=>{Linking.openURL('tel:911');}}

   style = {{
    height:75,
    backgroundColor:'#d22235',
    width:wp('60%'),
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }}>
    <View style = {{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:"center"
    }}>
  <Ionicons name="call" size={50} color="white" />    
  <View style = {{
    paddingLeft:10
  }} >
  <Text style = {{
    color:'white',
    fontSize:35,
    paddingBottom:1,
    fontWeight:'600'
  }}>911</Text>
  <Text style = {{
    color:'white',
    fontSize:15,
    fontWeight:'600'
  }}>EMERGENCY</Text>
  </View>
  </View>
  </TouchableOpacity>

</View>





      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    flex: 1,
    marginTop: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 2,

   

  },
  WelcomeNote: {
    flex: 1,
    justifyContent: 'center'
  },



  


});


// import SvgUri from 'react-native-svg-uri';                                    
// <SvgUri
//                                         width="40"
//                                         height="35"
//                                         source={require('../assets/credit_card_icon.svg')}
//                                     />