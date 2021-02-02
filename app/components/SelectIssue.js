import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'
import SelectProperty from '../components/SelectProperty'
import AntDesign from 'react-native-vector-icons/AntDesign'
import WhatHap from '../screens/WhatHap';




class SelectIssue extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isSelectPropertyShow: false,
        isWhatHapShow : false,
        isYourPropertiesShow : true
    
    }
}

callTabsAction = (name) => {
  this.setState(prev = ({

    isSelectPropertyShow: false,
    isWhatHapShow : false,
    isYourPropertiesShow: false,
      ...{ [name]: true }
  }))
  console.log({ [name]: true }, "tetstst")

}

  toggleClick =() =>{
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <View style={styles.container}>



<StatusBar
    barStyle = "dark-content"
    // dark-content, light-content and default
    hidden = {false}
    //To hide statusBar
    backgroundColor = "white"
    //Background color of statusBar only works for Android
    // translucent = {false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible = {true}
/>


        <View style={styles.header}>
        <View style={{
            width: wp('90%'),
            flexDirection: 'row',
            height:hp('5%'),
            alignSelf: 'center',
            justifyContent: 'space-between'
          }}>

            <View style={{
              justifyContent: 'center',
              height:hp('5%'),

            }}>
              <TouchableOpacity onPress={() => this.toggleClick()}>
              <Icon name="bars" color='#26cd9b' size={27} />
              </TouchableOpacity>

            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',

            }} >
              <View style={{
                marginRight: 5,
                height:hp('5%'),
                justifyContent: 'center',
              }} >

                <Text style={{
                  alignSelf: 'flex-end',
                  width: wp('22%'),
                  fontSize: 17,
                  fontWeight:'bold',
                  color: 'black',
                  justifyContent: 'center'
                }} >User name</Text>
                
              </View>

              <View>
              <Image source={require('../Assetss/mpic.jpg')} style = {{height:40, width:40, borderRadius:25}} />         

              </View>


            </View>


          </View>
        </View>
        <View style={styles.WelcomeNote}>

          <View style={{
            width: wp('55%'),
            flexDirection:'row',
            justifyContent:'space-between'

          }}>
          <AntDesign name="arrowleft" color="black" size={30}/>
            <Text style={{
              fontSize: 24,
              fontWeight: '700'
            }}>Report an issue</Text>

           
          </View>

        </View>









        {
    this.state.isSelectPropertyShow === true ?
    <SelectProperty />

    :

    <View>
      
      
      <View>

            <View style = {{
                height:hp('8%'),
                justifyContent:'center',
                alignSelf:'center'
            }}>
                <Text style = {{
                    fontSize:22,
                    fontWeight:"500"
                }}>Select an Issue Type</Text>
            </View>

<View style = {{
    width:wp('70%'),
    marginBottom:20,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Plumbing</Text>
          </View>   
             </View>   


             <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center",
    
}}>
              <Text style = {{
                  fontSize:18
              }}>Pest</Text>
          </View>   
             </View>  
             </View>


             <View style = {{
    width:wp('70%'),
    alignSelf:'center',
    flexDirection:'row',
    marginBottom:20,

    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Garbage</Text>
          </View>   
             </View>   


             <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Severage</Text>
          </View>   
             </View>  
             </View>







      <View style = {{
    width:wp('70%'),
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Electricity</Text>
          </View>   
             </View>   


             <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Gas</Text>
          </View>   
             </View>  
             </View>       

        </View>


<View style = {{
    height:hp('18%'),
    justifyContent:'flex-end',
    alignSelf:'center'
    
}}>
    <TouchableOpacity onPress={
                            () => { this.callTabsAction("isSelectPropertyShow")}}
    style = {{
        width:wp('65%'),
        height:hp('5%'),
        borderRadius:6,
        alignContent:'center',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#26cd9b'
    }}>
    <Text style = {{
        color:'white',
        fontSize:18
    }}>Next</Text>
    </TouchableOpacity>
</View>
      
{
  this.state.isWhatHapShow === false ?
  <WhatHap /> 
  :
  
<View style = {{
    height:hp('18%'),
    justifyContent:'flex-end',
    alignSelf:'center'
    
}}>
    <TouchableOpacity onPress={
                            () => {this.callTabsAction("isWhatHapShow")}}
    style = {{
        width:wp('65%'),
        height:hp('5%'),
        borderRadius:6,
        alignContent:'center',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#26cd9b'
    }}>
    <Text style = {{
        color:'white',
        fontSize:18
    }}>Next</Text>
    </TouchableOpacity>
</View>
}   

      
      
      </View>

}


        {/* <View>

            <View style = {{
                height:hp('8%'),
                justifyContent:'center',
                alignSelf:'center'
            }}>
                <Text style = {{
                    fontSize:22,
                    fontWeight:"500"
                }}>Select an Issue Type</Text>
            </View>

<View style = {{
    width:wp('70%'),
    marginBottom:20,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Plumbing</Text>
          </View>   
             </View>   


             <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center",
    
}}>
              <Text style = {{
                  fontSize:18
              }}>Pest</Text>
          </View>   
             </View>  
             </View>


             <View style = {{
    width:wp('70%'),
    alignSelf:'center',
    flexDirection:'row',
    marginBottom:20,

    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Garbage</Text>
          </View>   
             </View>   


             <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Severage</Text>
          </View>   
             </View>  
             </View>







      <View style = {{
    width:wp('70%'),
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'
}}>


         <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Electricity</Text>
          </View>   
             </View>   


             <View style = {{
             height:hp('15%'),
             width:wp('32%'),
             borderRadius:7,
             backgroundColor:'white',
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5
         }}>
             <View style = {{
                 width:'10%',
                 height:hp('11%'),
                 justifyContent:"center",
                 alignItems:'center',
                 alignSelf:'center'
             }}>

<Image
                source={require('../assets/signupimg.jpg')}
                style={{ height:hp("10%") , width: wp('20%') }}
              />
</View>
<View style = {{
    height:hp('3%'),
    justifyContent:'center',
    alignSelf:"center"
}}>
              <Text style = {{
                  fontSize:18
              }}>Gas</Text>
          </View>   
             </View>  
             </View>       

        </View>


<View style = {{
    height:hp('18%'),
    justifyContent:'flex-end',
    alignSelf:'center'
    
}}>
    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SelectProperty') }}
    style = {{
        width:wp('65%'),
        height:hp('5%'),
        borderRadius:6,
        alignContent:'center',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#26cd9b'
    }}>
    <Text style = {{
        color:'white',
        fontSize:18
    }}>Next</Text>
    </TouchableOpacity>
</View> */}

           



      </View>
    );
  }
}

export default SelectIssue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    height:hp('7%'),
    marginTop:35,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'

  },
  WelcomeNote: {
      height:hp('10%'),
    width:wp('90%'),
    alignSelf:'center',
    justifyContent: 'center'
  },
  Cards: {
    flex: 6,
    backgroundColor: 'yellow'
  },


  card: {
    backgroundColor: 'white',
    width: wp('90%'),
    height: hp('13%'),
    alignSelf: "center",
    borderRadius: 10,
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


// import SvgUri from 'react-native-svg-uri';                                    
// <SvgUri
//                                         width="40"
//                                         height="35"
//                                         source={require('../assets/credit_card_icon.svg')}
//                                     />