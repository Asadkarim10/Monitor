import * as React from 'react';
import {  Modal, Portal, Text, Button, Provider,  } from 'react-native-paper';
import { View, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Modaltrip = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
         <Modal visible={visible}  onDismiss={hideModal}>
         <View   style = {{ 
             backgroundColor:'white',
             height : "auto",
         }} >

      <View style = {{
        height:hp('5%'),
        flexDirection:'row',
        width:wp('96%'),
        alignContent:'center',
        alignItems:'center',
        justifyContent:'flex-end'
      }}>
        <TouchableOpacity  onPress={hideModal}>
        <Icon name='close' color="#26cd9b"  size={25}/> 
        </TouchableOpacity>
      </View>
      <View style = {{
        height:hp('6%'),
        alignSelf:'center'
      }}>
        <Text style = {{
          fontWeight:'700',
          fontSize:27
        }}>Select a payment method</Text>
      </View>

      <View style = {{
    width:wp('60%'),
    marginBottom:20,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('13%'),
             width:wp('28%'),
             justifyContent:'center',
             borderRadius:7,
             backgroundColor:'white',

             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 1.84,
             
             elevation: 5
         }}>
            <View style = {{
            
             
           }}>
             <View style = {{
               
               height:hp('2%'),
               width:wp('5%'),
               alignItems:'center',
               justifyContent:'center',
               borderRadius:50,
             }}>
  </View>             
           </View>
             <View style = {{
                 width:'10%',
                 height:hp('5%'),
                 justifyContent:'flex-end',
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("4%") , width: wp('16%') }}
              />
</View>
<View style = {{
    alignSelf:'center',
    height:hp('4%'),
    justifyContent:'flex-end',
}}>
              <Text style = {{
                  fontSize:15
              }}>Paypal</Text>
          </View>   
             </View>   

<TouchableOpacity >
            
         <View style = {{
             height:hp('13%'),
             width:wp('28%'),
             justifyContent:'center',
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 1.84,
             
             elevation: 5
         }}>

           <View style = {{
             flexDirection:'row',
             justifyContent:'flex-end',
             paddingRight:10,
             
           }}>
             <View style = {{
               
               borderWidth:1,
               height:hp('3%'),
               width:wp('6%'),
               alignItems:'center',
               justifyContent:'center',
               borderRadius:25,
               borderColor:'#26cd9b'
             }}>
<Icon name='check' color="#26cd9b" />
  </View>             
           </View>
             <View style = {{
                 width:'10%',
                 height:hp('5%'),
                 justifyContent:'center',
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("4%") , width: wp('12%') }}
              />
</View>
<View style = {{
    alignSelf:'center',
    height:hp('4%'),
    justifyContent:'flex-end',
}}>
              <Text style = {{
                  fontSize:15
              }}>Bank</Text>
          </View>   
             </View> 
             </TouchableOpacity>
             </View>
      <View style = {{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:"center",
        height:hp('10%')
      }}>
        <TouchableOpacity style = {{
          marginTop:-40,
          backgroundColor:'#26cd9b',
          width:wp('45%'),
          height:hp('5%'),
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5


        }}>
          <Text style = {{
           color:'white',
           fontWeight:'500',
           fontSize:17
          }}>Pay Now!</Text>
        </TouchableOpacity>
      </View>


    


    
 
          </View> 
        </Modal>





        
        <View >
        <Button style={{marginTop: 30, paddingLeft: "75%"}}  onPress={showModal}>
         <Text>  menu </Text> 
        </Button>
        </View>
      </Portal>
    </Provider>
  );
};

export default Modaltrip;


{/* <TouchableOpacity  onPress={hideModal} style = {{
  backgroundColor:"#0738FB",
  borderColor:'blue',
      borderRadius:16,
      marginRight:5,
      borderWidth:2,

  }}>
      <Text
      style = {{
          fontSize:25,
          padding:10,
          paddingTop:13,
          fontWeight:'bold',
          color:'white',
      }}
      >Go Back</Text>
  </TouchableOpacity> */}