import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImageShow from '../components/ImageShow';
import Moment from 'react-moment';

import { getvehicle } from '../actions/vehicleAction'
import { connect } from 'react-redux';

const YourCars = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.getvehicle({});
        }, 500)

    }, [])

    return (

        <View>



            {
                props.vehicle.length > 0 ?
                <>
                {
                    props.vehicle.map((item,index) =>{
                        return(
                            <TouchableOpacity key={index} onPress={() => props.navigation.navigate('BookNow' ,{Id: item.id})} >

                            <View style={styles.card}>
            
                                <View style={{
                                    width: wp('88%'),
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    alignSelf: 'center'
                                }}>
                                    <ImageShow 
                                        url={ (item.media !== null )? item.media.url :  "" } 
                                        style={{ height: 113, width: 113 }}
                                    />
  
                                    <View style={{
                                        width: wp('52%'),
                                        height: 70,
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                        }}>{item.model_name}</Text>
                                        <View style={{
                                            width: wp('51%'),
                                            height: 35,
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start'
                                        }}>
                                            <Text style={{
                                                color: "#707070",
                                                fontSize: 13,
                                                opacity: 0.8,
                                                letterSpacing: 1
                                            }}>{item.car_hp} HP | {item.car_colour} | {item.car_engine}</Text>
                                        </View>
                                        <View style={{
                                            width: wp('48%'),
                                            height: 35,
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            alignItems: 'center',
            
                                        }}>
                                            <Text style={{
                                                color: "#707070",
                                                fontSize: 13,
                                            }}>{item.model_year}</Text>
                                            <Text style={{
                                                color: "#707070",
                                                fontSize: 13,
                                                paddingRight:6
                                            }}>{item.car_mileage} KM</Text>
                                        </View>
                                    </View>
            
                                </View>
                            </View>
            
                        </TouchableOpacity>
            
            
                        )
                    })
                }
                </>
                :
                null
            }

            <View style={{
                marginTop: 10
            }}></View>


        </View>
    );
}

//export default ;

const mapStateToProps = state => ({
    auth: state.auth,
    rest: state.rest,
    vehicle: state.vehicle.vehicles
});

const mapDispatchToProps = dispatch => ({
    getvehicle: (payload) => dispatch(getvehicle(payload))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YourCars)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    WelcomeNote: {
        flex: 1.5,
        justifyContent: 'center'
    },

    card: {
        backgroundColor: 'white',
        width: wp('88%'),
        marginTop: 10,
        height: 113,
        alignSelf: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .2,
        shadowRadius: 3,
        elevation: 4
    },

});
