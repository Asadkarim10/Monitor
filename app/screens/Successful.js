import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header'

class Successful extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount = () =>{
        setTimeout( () => {
            this.props.navigation.navigate("ConfirmBooking");
          }, 6000 );
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#DFDEDC'
            },

        });

        return (
            <View style={styles.container}>



                <Header navigation={this.props.navigation} />

                <View style={{
                    flex: 3,
                    justifyContent:'flex-end',
                    alignItems:'center',
                    width:wp("100%"),
                    paddingBottom:20
                }}>
                    <Image
                        source={require('../assets/ThankYou.png')}
                        resizeMode='contain'
                        style={{ height: 120, width: 120 }}
                    />
                </View>

                <View style={{
                    flex: 0.5,
                    justifyContent:'center',
                    alignItems:'center',
                    width:wp("100%")
                }}>
                    <Text style={{
                        color:'#272727',
                        fontSize:22
                    }}>THANK YOU!</Text>

                </View>

                <View style={{
                    flex: 3,
                    width: wp('84%'),
                    alignSelf: 'center',
                }}>
                    <Text style={{
                        color:'#707070',
                        fontSize: 20,
                        textAlign: 'center'
                    }}>You've successfully placed a booking! We'll let you know if your booking is approved!</Text>
                </View>

            </View>
        );
    }
}

export default Successful;


