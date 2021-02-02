import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'

const YourProperties = (props) => {
  return (

    <View>
     <TouchableOpacity onPress={() => props.navigation.navigate('YourProperty') } >


         <View style={styles.card}>
          
           <View style = {{
            width:wp('95%'),

           flexDirection:'row',
            justifyContent:'space-around',
            alignSelf:'center',
          }}>
            <View  style = {{
              width:wp('15%')
            }}>
            <Image
            source={require('../assets/home1.jpg')}
            style={{ height:hp("11%") , width: wp('25%') , borderRadius:10 }}
          />            
          </View>

          <View style = {{
              width:wp('60%'),
             marginLeft:20,
            marginTop:4,
          }}>

          <View style = {{
            width:wp('59%'),

          
          }}>
              <View style = {{
                  height:hp('4%')
              }}>
            <Text style = {{
                fontSize:15
            }}>Address 1211 jocarando boulevard, venice, fl 34292</Text>
            </View>
            <View style = {{
              height:hp('3%'),
              flexDirection:'row',
              width:wp('58%'),
              alignItems:'center',
              justifyContent:'space-around'
            }}>
                <View style = {{
                    width:wp('27%'),
                    height:hp('3%'),
                    justifyContent:'flex-end',
                }}>
            <Text style = {{
              fontSize:16,
              fontWeight:"700" }}>$1,000/M</Text>
</View>
            < View style = {{
            height:hp('2.4%'),

            justifyContent:'flex-end'
          }}>
            <Text style = {{
              fontSize:11
            }}>Due , December 27 , 2020</Text>
          </View>

            </View>
          </View>

       

  <View style = {{
    width:wp('27%'),
    height:hp('4%'),
    alignContent:'center',
    justifyContent:'flex-start',
    flexDirection:'row',
    alignItems:'center'
  }}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
  marginLeft:5,
  fontSize:13
}}>Landlord Name</Text>
     
  </View>
</View>

            </View>
          </View>
          
 </TouchableOpacity>

 <TouchableOpacity onPress={() => props.navigation.navigate('YourProperty') } >


<View style={styles.card}>
 
  <View style = {{
   width:wp('95%'),

  flexDirection:'row',
   justifyContent:'space-around',
   alignSelf:'center',
 }}>
   <View  style = {{
     width:wp('15%')
   }}>
   <Image
   source={require('../assets/home1.jpg')}
   style={{ height:hp("11%") , width: wp('25%') , borderRadius:10 }}
 />            
 </View>

 <View style = {{
     width:wp('60%'),
    marginLeft:20,
   marginTop:4,
 }}>

 <View style = {{
   width:wp('59%'),

 
 }}>
     <View style = {{
         height:hp('4%')
     }}>
   <Text style = {{
       fontSize:15
   }}>Address 1211 jocarando boulevard, venice, fl 34292</Text>
   </View>
   <View style = {{
     height:hp('3%'),
     flexDirection:'row',
     width:wp('58%'),
     alignItems:'center',
     justifyContent:'space-around'
   }}>
       <View style = {{
           width:wp('27%'),
           height:hp('3%'),
           justifyContent:'flex-end',
       }}>
   <Text style = {{
     fontSize:16,
     fontWeight:"700" }}>$1,000/M</Text>
</View>
   < View style = {{
   height:hp('2.4%'),

   justifyContent:'flex-end'
 }}>
   <Text style = {{
     fontSize:11
   }}>Due , December 27 , 2020</Text>
 </View>

   </View>
 </View>



<View style = {{
width:wp('27%'),
height:hp('4%'),
alignContent:'center',
justifyContent:'flex-start',
flexDirection:'row',
alignItems:'center'
}}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
marginLeft:5,
fontSize:13
}}>Landlord Name</Text>

</View>
</View>

   </View>
 </View>
 
</TouchableOpacity>

<TouchableOpacity onPress={() => props.navigation.navigate('YourProperty') } >


<View style={styles.card}>
 
  <View style = {{
   width:wp('95%'),

  flexDirection:'row',
   justifyContent:'space-around',
   alignSelf:'center',
 }}>
   <View  style = {{
     width:wp('15%')
   }}>
   <Image
   source={require('../assets/home1.jpg')}
   style={{ height:hp("11%") , width: wp('25%') , borderRadius:10 }}
 />            
 </View>

 <View style = {{
     width:wp('60%'),
    marginLeft:20,
   marginTop:4,
 }}>

 <View style = {{
   width:wp('59%'),

 
 }}>
     <View style = {{
         height:hp('4%')
     }}>
   <Text style = {{
       fontSize:15
   }}>Address 1211 jocarando boulevard, venice, fl 34292</Text>
   </View>
   <View style = {{
     height:hp('3%'),
     flexDirection:'row',
     width:wp('58%'),
     alignItems:'center',
     justifyContent:'space-around'
   }}>
       <View style = {{
           width:wp('27%'),
           height:hp('3%'),
           justifyContent:'flex-end',
       }}>
   <Text style = {{
     fontSize:16,
     fontWeight:"700" }}>$1,000/M</Text>
</View>
   < View style = {{
   height:hp('2.4%'),

   justifyContent:'flex-end'
 }}>
   <Text style = {{
     fontSize:11
   }}>Due , December 27 , 2020</Text>
 </View>

   </View>
 </View>



<View style = {{
width:wp('27%'),
height:hp('4%'),
alignContent:'center',
justifyContent:'flex-start',
flexDirection:'row',
alignItems:'center'
}}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
marginLeft:5,
fontSize:13
}}>Landlord Name</Text>

</View>
</View>

   </View>
 </View>
 
</TouchableOpacity>
<TouchableOpacity onPress={() => props.navigation.navigate('YourProperty') } >


<View style={styles.card}>
 
  <View style = {{
   width:wp('95%'),

  flexDirection:'row',
   justifyContent:'space-around',
   alignSelf:'center',
 }}>
   <View  style = {{
     width:wp('15%')
   }}>
   <Image
   source={require('../assets/home1.jpg')}
   style={{ height:hp("11%") , width: wp('25%') , borderRadius:10 }}
 />            
 </View>

 <View style = {{
     width:wp('60%'),
    marginLeft:20,
   marginTop:4,
 }}>

 <View style = {{
   width:wp('59%'),

 
 }}>
     <View style = {{
         height:hp('4%')
     }}>
   <Text style = {{
       fontSize:15
   }}>Address 1211 jocarando boulevard, venice, fl 34292</Text>
   </View>
   <View style = {{
     height:hp('3%'),
     flexDirection:'row',
     width:wp('58%'),
     alignItems:'center',
     justifyContent:'space-around'
   }}>
       <View style = {{
           width:wp('27%'),
           height:hp('3%'),
           justifyContent:'flex-end',
       }}>
   <Text style = {{
     fontSize:16,
     fontWeight:"700" }}>$1,000/M</Text>
</View>
   < View style = {{
   height:hp('2.4%'),

   justifyContent:'flex-end'
 }}>
   <Text style = {{
     fontSize:11
   }}>Due , December 27 , 2020</Text>
 </View>

   </View>
 </View>



<View style = {{
width:wp('27%'),
height:hp('4%'),
alignContent:'center',
justifyContent:'flex-start',
flexDirection:'row',
alignItems:'center'
}}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
marginLeft:5,
fontSize:13
}}>Landlord Name</Text>

</View>
</View>

   </View>
 </View>
 
</TouchableOpacity>
<TouchableOpacity onPress={() => props.navigation.navigate('YourProperty') } >


<View style={styles.card}>
 
  <View style = {{
   width:wp('95%'),

  flexDirection:'row',
   justifyContent:'space-around',
   alignSelf:'center',
 }}>
   <View  style = {{
     width:wp('15%')
   }}>
   <Image
   source={require('../assets/home1.jpg')}
   style={{ height:hp("11%") , width: wp('25%') , borderRadius:10 }}
 />            
 </View>

 <View style = {{
     width:wp('60%'),
    marginLeft:20,
   marginTop:4,
 }}>

 <View style = {{
   width:wp('59%'),

 
 }}>
     <View style = {{
         height:hp('4%')
     }}>
   <Text style = {{
       fontSize:15
   }}>Address 1211 jocarando boulevard, venice, fl 34292</Text>
   </View>
   <View style = {{
     height:hp('3%'),
     flexDirection:'row',
     width:wp('58%'),
     alignItems:'center',
     justifyContent:'space-around'
   }}>
       <View style = {{
           width:wp('27%'),
           height:hp('3%'),
           justifyContent:'flex-end',
       }}>
   <Text style = {{
     fontSize:16,
     fontWeight:"700" }}>$1,000/M</Text>
</View>
   < View style = {{
   height:hp('2.4%'),

   justifyContent:'flex-end'
 }}>
   <Text style = {{
     fontSize:11
   }}>Due , December 27 , 2020</Text>
 </View>

   </View>
 </View>



<View style = {{
width:wp('27%'),
height:hp('4%'),
alignContent:'center',
justifyContent:'flex-start',
flexDirection:'row',
alignItems:'center'
}}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
marginLeft:5,
fontSize:13
}}>Landlord Name</Text>

</View>
</View>

   </View>
 </View>
 
</TouchableOpacity>




 

    </View>
  );
}

export default YourProperties;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
  
    header: {
      flex: 1,
      marginTop:35,
      shadowColor: "#000",
  shadowOffset: {
      width: 2,
      height: 8,
  },
  shadowOpacity: 5.25,
  shadowRadius: 6.84,
  
  elevation: 7,
  
      backgroundColor: '#2bc5c1',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    WelcomeNote: {
      flex: 1.5,
      justifyContent: 'center'
    },
   
  
  
    card: {
      backgroundColor: 'white',
      width: wp('90%'),
      marginTop:10,
      height: hp('13%'),
      alignSelf: "center",
      borderRadius: 7,
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: .2,
      shadowRadius: 3,
      
    },
    img : {
      height:60,
      width:60
    },
  
    InventoryText: {
      fontSize: 20,
      fontWeight: '400',
    }
  
  
  });
  