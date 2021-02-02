import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'react-native'
import Issues from '../components/Issues';
import Rental from '../components/Rental'
import YourProperties from '../components/YourProperties'
import BankDetails from '../components/BankDetails'
class ThankYou extends Component {
    

  constructor(props) {
    super(props)
    this.state = {
        isBankDetailsShow: false,  
    }
}


callTabsAction = (name) => {
    this.setState(prev = ({

      isBankDeatilsShow: false,
     
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
              <Icon 
              name="bars" color='#2bc5c1' size={27} />
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
            width: wp('90%'),
             alignSelf:'center',
            alignItems:'center',
            flexDirection:'row',
          //  justifyContent:'flex-start'

          }}>

<TouchableOpacity onPress={() => this.toggleClick()}>
              <Icon name="arrowleft" color='black' size={33} />
              </TouchableOpacity>

            <Text style={{
              fontSize: 28,
              marginLeft:10,
              fontWeight: '700'
            }}>Pay Rental</Text>

           
          </View>

        </View>







<View style = {{
  flex:2.5,
  alignSelf:"center",
//   marginTop:50
}}>



<Image
            source={require('../assets/thankyou.jpg')}
            style={{ height:hp("24%") , width: wp('58%') }}
          />




</View>










<View style = {{
    flex:3,
    width:wp('80'),
    alignSelf:'center',

}}>
   <Text style = {{
       fontSize:25
   }}>Thanks you! Your Payment has been received successfully!</Text>
</View>

<View style = {{
    flex:1,
    justifyContent:'center'
}}>

<TouchableOpacity onPress={() => this.props.navigation.navigate('PayRent')}
style = {{
    width:wp('70%'),
    height:hp('5%'),
    alignItems:'center',
    backgroundColor:'#26cd9b',
    alignSelf:'center',
    borderRadius:5,
    justifyContent:'center',
    flexDirection:'row'
}}>
    <Text style = {{
        color:'white',
        fontWeight:'500',
        fontSize:16
    }}>Pay another rentall!</Text>
</TouchableOpacity>

</View>
           



      </View>
    );
  }
}

export default ThankYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    flex: .7,
    shadowColor: "#000",
shadowOffset: {
	width: 2,
	height: 4,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 7,

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'

  },
  WelcomeNote: {
    flex: 1.2,
    paddingTop:40
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
  


});


// import SvgUri from 'react-native-svg-uri';                                    
// <SvgUri
//                                         width="40"
//                                         height="35"
//                                         source={require('../assets/credit_card_icon.svg')}
//                                     />