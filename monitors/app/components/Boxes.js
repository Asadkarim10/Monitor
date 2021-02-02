import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';



const Boxes = () => {
  return (
      <View style = {{
backgroundColor:'white',
          justifyContent:'center',
      }}>
          <ScrollView>
          <View style = {{
              flex:1,
              backgroundColor:'white'
          }}>
    <View style = {{
        flexDirection:'row',
        justifyContent:'space-around'
    }}>
        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2',
                alignSelf:'center'
            }}>1562</Text>
            <Text style = {{
                color:'#7973e2',
                fontSize:25,
                alignSelf:'center'

            }}>Zingxnian</Text>
            </View>
        </View>


        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>92 Kcal</Text>
            
            </View>
        </View>




    </View>



    <View style = {{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
    }}>
        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>1,42 km</Text>
            
            </View>
        </View>


        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>6h 35 min</Text>
            
            </View>
        </View>
    </View>
    



    <View style = {{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
    }}>
        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>35 min</Text>
            <Text style = {{
                color:'#7973e2',
                fontSize:20,

            }}>Intensive</Text>
             <Text style = {{
                color:'#7973e2',
                fontSize:20,

            }}>Judejimo</Text>
            </View>
        </View>


        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:30,
                color:'#7973e2'
            }}>150 laiptai</Text>
            
            </View>
        </View>
    </View>



    <View style = {{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
    }}>
        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>68</Text>
            <Text style = {{
                color:'#7973e2',
                fontSize:25,

            }}>Duziu/min</Text>
            </View>
        </View>


        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>Streso lygis</Text>
            
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>Aukstas</Text>
            </View>
        </View>
    </View>

    
    <View style = {{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
    }}>
        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>Judesio IQ</Text>
        
            </View>
        </View>


        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>3h 05 min</Text>
            
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>Judesio</Text>
            </View>
        </View>
    </View>



    <View style = {{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
    }}>
        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>Pulso</Text>
        
        <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>okimitrija</Text>

<Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>95%</Text>
            </View>
        </View>


        <View style = {{
            backgroundColor:'#f1f3ff',
            width:wp('40%'),
            height:150,

        }}>
            <View>
            <Icon name="search" size={30} />

            </View>
            <View style = {{
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>Kunu Baterija:</Text>
            
            <Text style = {{
                fontSize:25,
                color:'#7973e2'
            }}>21</Text>
            </View>
        </View>
    </View>



    <View style = {{
        marginTop:20,
            backgroundColor:'#f1f3ff',
            width:wp('90%'),
            height:100,
            alignSelf:'center',
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            alignContent:"center"

            }}>
                 
                 <Icon name="search" size={30} />


            <Text style = {{
                fontSize:30,
                color:'#7973e2',
            }}>15 ikminsa per mint</Text>
        
           
    </View>
    </View>
    </ScrollView>
    <View style = {{
        height:200,
        marginTop:20,
        backgroundColor:'white',
       
    }}>    
        <View style = {{
        width:wp('60%'),
        height:40,
        alignContent:'center',
        position:'relative',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:5,
        backgroundColor:'#d3171a'
    }}>
        <Text style = {{
            alignSelf:'center',
            color:'white',
            fontSize:20
        }}>Atsieti jrengini</Text>
        
    </View>
    </View>
    </View>

  
  );
}

export default Boxes;