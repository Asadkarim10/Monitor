import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native'
import ImageSlider from '../components/ImageSlider'
import Header from '../components/Header'

import Moment from 'react-moment';
import ImageShow from '../components/ImageShow';
import { getsinglevehicle } from "../actions/vehicleAction"

class BookNow extends Component {

    componentDidMount() {
        this.props.getsinglevehicle(this.props.route.params);
    }


    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#DFDEDC'
            },
        })

        return (
            <View style={styles.container} >





                {
                    this.props.vehicle != null ?
                        <>

                            <Header navigation={this.props.navigation} />
                            <View style={{
                                flex: 5.5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>


                                <ImageSlider media={this.props.vehicle.media} />
                            </View>

                            <View style={{
                                width: wp("90%"),
                                alignSelf: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 22,
                                }}>{this.props.vehicle.model_name}</Text>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '500'
                                }}>{this.props.vehicle.model_year}</Text>
                            </View>

                            <View style={{
                                width: wp("90%"),
                                alignSelf: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    opacity: 0.5
                                }}>{this.props.vehicle.car_nick}</Text>
                            </View>

                            <ScrollView style={{
                                marginTop:10,
                                maxHeight: 190,
                            }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    width: wp('90%'),
                                    height: 140,
                                    alignSelf: "center",
                                    justifyContent: 'center',
                                    shadowColor: "#000",
                                    alignItems: 'center',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: .2,
                                    shadowRadius: 3,
                                    elevation: 4,
                                }}>
                                    <View style={{
                                        width: wp("90%"),
                                        alignItems: 'center',
                                        height: 30,
                                        justifyContent: 'center',
                                    }}>
                                        <Text>DETAILS</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: wp("90%"),
                                        justifyContent: 'space-between',
                                        height: 50,
                                    }}>
                                        <View style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: wp("30%"),
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>Hoursepower</Text>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>{this.props.vehicle.car_hp}</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: wp("30%"),
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>Color</Text>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>{this.props.vehicle.car_colour}</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: wp("30%"),
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>Mileage</Text>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>{this.props.vehicle.car_mileage} KM</Text>
                                        </View>

                                    </View>

                                    <View style={{
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            backgroundColor: "#707070",
                                            width: wp('76%'),
                                            opacity: 0.5,
                                            height: 2,
                                        }}></Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: wp("90%"),
                                        justifyContent: 'space-between',
                                        height: 50,
                                        marginTop: 10
                                    }}>
                                        <View style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: wp("30%"),
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>Doors</Text>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>{this.props.vehicle.doors}</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: wp("30%"),
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>Seats</Text>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>{this.props.vehicle.car_seats}</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: wp("30%"),
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>Car Ratio</Text>
                                            <Text style={{
                                                fontSize: 14,
                                            }}>{this.props.vehicle.car_ratio}:{this.props.vehicle.car_ratiotwo}</Text>
                                        </View>

                                    </View>


                                </View>

                                <View style={{
                                    marginTop: 15,
                                    backgroundColor: 'white',
                                    width: wp('90%'),
                                    height: 140,
                                    alignSelf: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: .2,
                                    shadowRadius: 3,
                                    elevation: 4,
                                    marginBottom: 15
                                }}>
                                    <View style={{
                                        width: wp("90%"),
                                        alignItems: 'center',
                                        height: 40,
                                        justifyContent: 'center',
                                    }}>
                                        <Text>DESCRIPTION</Text>
                                    </View>
                                    <ScrollView>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: wp("80%"),
                                            alignSelf: 'center'
                                        }}>
                                            <Text numberOfLines={5}>This is a PureComponent which means that it will not re-render if props are shallow-equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.
                            In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.</Text>
                                        </View>
                                    </ScrollView>
                                </View>


                            </ScrollView>

                            <View style={{
                                flex: 1.5,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ConfirmBooking', { item: this.props.vehicle }) }}
                                    style={{
                                        height: 50,
                                        width: wp('45%'),
                                        backgroundColor: '#272727',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        opacity: 0.8
                                    }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: '500'
                                    }}>BOOK NOW</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{
                                flex: 0.25,
                            }}>
                            </View>


                        </>
                        :
                        null
                }





            </View>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    vehicle: state.vehicle.currentvehicle
});

const mapDispatchToProps = dispatch => ({
    getsinglevehicle: (payload) => dispatch(getsinglevehicle(payload))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookNow);



