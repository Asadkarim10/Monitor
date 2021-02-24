import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header'

import ImageShow from '../components/ImageShow';
import { getbooking } from '../actions/vehicleAction'
import { getsinglevehicle } from "../actions/vehicleAction"
import Moment from 'react-moment';

class YourBooking extends Component {

    componentDidMount() {
        this.props.getbooking({})
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#DFDEDC'
            },
            WelcomeNote: {
                height: hp('8%'),
                backgroundColor: 'white',
                justifyContent: 'center'
            },
            card: {
                backgroundColor: 'white',
                width: wp('88%'),
                height: 115,
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
        })
        return (
            <View style={styles.container} >
                <Header navigation={this.props.navigation} />
                <View style={{
                    flex: 1.25,
                    width: wp("98%"),
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')} >
                        <Icon name="keyboard-arrow-left" size={40} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 22,
                    }}>YOUR BOOKINGS</Text>
                </View>
                <View style={{
                    flex: 8
                }}>
                    <ScrollView>
                        {
                            (this.props.vehicle.length > 0) ?
                                <>
                                    {
                                        this.props.vehicle.map((item, index) => {
                                            return (
                                                <TouchableOpacity key={index}>
                                                    <View style={{
                                                        height: 180,
                                                        backgroundColor: "#eeeded",
                                                        width: wp("88%"),
                                                        alignSelf: 'center',
                                                        elevation: 4,
                                                        marginBottom: 10
                                                    }}>
                                                        <View style={styles.card}>
                                                            <View style={{
                                                                width: wp('88%'),
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                alignSelf: 'center'
                                                            }}>
                                                                <ImageShow
                                                                    url={(item.media !== null) ? item.media.url : ""}
                                                                    style={{ height: 113, width: 113 }}
                                                                />

                                                                <View style={{
                                                                    width: wp('52%'),
                                                                    height: 70,
                                                                }}>
                                                                    <Text style={{
                                                                        fontSize: 16,
                                                                    }}>{item.vehicle.model_name}</Text>
                                                                    <View style={{
                                                                        width: wp('48%'),
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
                                                                        }}>{item.vehicle.car_hp} HP | {item.vehicle.car_colour} | {item.vehicle.car_engine}</Text>
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
                                                                        }}>{item.vehicle.model_year}</Text>
                                                                        <Text style={{
                                                                            color: "#707070",
                                                                            fontSize: 13,
                                                                            paddingRight: 6
                                                                        }}>{item.vehicle.car_mileage} KM</Text>
                                                                    </View>
                                                                </View>

                                                            </View>
                                                        </View>

                                                        <View style={{
                                                            flex: 1,
                                                            flexDirection: 'row',
                                                            width: wp("72%"),
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            alignSelf: 'center'
                                                        }}>
                                                            <View style={{
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                width: wp("30%"),
                                                            }}>
                                                                <Text style={{
                                                                    fontSize: 12,
                                                                }}>BOOKING DATE</Text>
                                                                <Moment element={Text} style={{
                                                                    color: '#707070',
                                                                    fontSize: 13,
                                                                    opacity: 0.8
                                                                }} format="MMMM D,YYYY">{item.startdate_at ?? ""}</Moment>
                                                            </View>

                                                            <View style={{
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                width: wp("30%"),
                                                            }}>
                                                                <Text style={{
                                                                    fontSize: 12,
                                                                }}>STATUS</Text>
                                                                <Text style={{
                                                                    color: '#707070',
                                                                    fontSize: 13,
                                                                    opacity: 0.8
                                                                }}>{item.status}</Text>
                                                            </View>

                                                        </View>
                                                    </View>
                                                </TouchableOpacity>


                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                {
                                    this.props.vehicle.length <= 0 ?
                                    <View style={{
                                        height:420,
                                        alignItems : "center",
                                        justifyContent : "center",
                                    }}>
                                        <Text style={{
                                            fontSize:18,
                                            color:"#707070"
                                        }}>You have no bookings yet!</Text>
                                    </View>
                                    :
                                    null
                                }
                                </>

                        }


                        <View style={{
                            marginTop: 10
                        }}></View>

                    </ScrollView>
                </View>






            </View>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    rest: state.rest,
    vehicle: state.vehicle.bookings,
});

const mapDispatchToProps = dispatch => ({
    getbooking: (payload) => dispatch(getbooking(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YourBooking)


