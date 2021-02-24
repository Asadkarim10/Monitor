import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'

const Issues = () => {
  return (
<View style = {{
    flex:1,
    justifyContent:'center'
}}>

 <ScrollView>

<View style = {{
  height:hp('55%'),
}}>

<TouchableOpacity >
          <View style={styles.card}>
          
          <View style = {{
            width:wp('95%'),
            flexDirection:'row',
            marginLeft:25,
            justifyContent:'space-around',
            alignSelf:'center',
          }}>
            <View  style = {{
              width:wp('13%'),
              
            }}>
            <Image
            source={require('../assets/home1.jpg')}
            style={{ height:hp("12%") , width: wp('25%') , borderRadius:10 }}
          />            
          </View>

          <View style = {{
            marginLeft:50,
            marginTop:5
          }}>

          <View style = {{
            width:wp('65%'),
          }}>
            <Text style = {{
              fontWeight:'800',
              fontSize:20
            }}>Title of the issue</Text>
            <View style = {{
              height:hp('2%'),
              justifyContent:'flex-end'
            }}>
            <Text style = {{
              fontSize:16,
              fontWeight:"600"
            }}>Issue type</Text>
            </View>
            <View style = {{
              height:hp('4%'),
              justifyContent:'center',
  width:wp('59%'),
}}>
<Text style = {{
    fontSize:12,
    fontWeight:'500'

}}> Lorem Ipsum is simply dummy text of the printing</Text>

</View>
          </View>

<View style = {{
  flexDirection:"row",
  height:hp('3%'),
  alignContent:'center',
  width:wp('58%'),
  justifyContent:'space-between'
}}>

  <View style = {{
    width:wp('25%'),
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  }}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
  marginLeft:5,
  fontSize:13
}}>Landlord Name</Text>
     
  </View>
          <View style = {{
            justifyContent:'center'
          }}>
            <Text style = {{
              fontSize:12
            }}> Dec 27 , 2020</Text>
          </View>
       
          </View>
            </View>
          </View>
          </View>
 </TouchableOpacity>
 
 
 <TouchableOpacity >
          <View style={styles.card}>
          
          <View style = {{
            width:wp('95%'),
            flexDirection:'row',
            marginLeft:25,
            justifyContent:'space-around',
            alignSelf:'center',
          }}>
            <View  style = {{
              width:wp('13%'),
              
            }}>
            <Image
            source={require('../assets/home1.jpg')}
            style={{ height:hp("12%") , width: wp('25%') , borderRadius:10 }}
          />            
          </View>

          <View style = {{
            marginLeft:50,
            marginTop:5
          }}>

          <View style = {{
            width:wp('65%'),
          }}>
            <Text style = {{
              fontWeight:'800',
              fontSize:20
            }}>Title of the issue</Text>
            <View style = {{
              height:hp('2%'),
              justifyContent:'flex-end'
            }}>
            <Text style = {{
              fontSize:16,
              fontWeight:"600"
            }}>Issue type</Text>
            </View>
            <View style = {{
              height:hp('4%'),
              justifyContent:'center',
  width:wp('59%'),
}}>
<Text style = {{
    fontSize:12,
    fontWeight:'500'

}}> Lorem Ipsum is simply dummy text of the printing</Text>

</View>
          </View>

<View style = {{
  flexDirection:"row",
  height:hp('3%'),
  alignContent:'center',
  width:wp('58%'),
  justifyContent:'space-between'
}}>

  <View style = {{
    width:wp('25%'),
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  }}>
<Image source={require('../assets/home.jpg')} style = {{height:hp('2%'),borderRadius:10, width:wp('3%')}} />    
<Text style = {{
  marginLeft:5,
  fontSize:13
}}>Landlord Name</Text>
     
  </View>
          <View style = {{
            justifyContent:'center'
          }}>
            <Text style = {{
              fontSize:12
            }}> Dec 27 , 2020</Text>
          </View>
       
          </View>
            </View>
          </View>
          </View>
 </TouchableOpacity>


 </View>

 </ScrollView>



<View style = {{
  flexDirection:'row-reverse',
  width:wp('95%')
}}>
  <TouchableOpacity style = {{
    height:hp('8%'),
    width:('18%'),
    justifyContent:'center',
    alignItems:'center',

    borderRadius:60,
    backgroundColor:'#26cd9b'
  }}>
<Icon name="plus"  color='white' size={30}/>  
</TouchableOpacity>
</View>

 

</View>  );
}

export default Issues;


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
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    
  
  
    card: {
      marginBottom:10,
      backgroundColor: 'white',
      width: wp('90%'),
      height: hp('14%'),
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
   
  
   
  
  
  });
  