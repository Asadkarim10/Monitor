import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header'
import { Calendar } from 'react-native-calendars';

import Moment from 'react-moment';
import ImageShow from '../components/ImageShow';
import { getsinglevehicle ,getbooking} from "../actions/vehicleAction"
import { restAction, API_CONTS, storeData } from "../actions/constant";
import { callAPI, updateAPIConfig } from "../api";
import RestDialogBox from "../components/RestDialogBox";

class ConfirmBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: null
        }
    }

    ConfirmBooking = () => {
        try {
            const restInit = {
                IS_LOADING: true,
                RETURN: false,
                IS_RETURN: false,
                RETURN_MESSAGE: "Something wrong",
            }
            this.props.restAction(restInit);
            const postsData = callAPI(API_CONTS.CONFIRMBOOKING, "post", {
                "vehicle_id": this.state.item.id, "startdate_at": "12-02-2021",
                "enddate_at": "12-02-2021",
                
            }).then(res => {
                restInit.IS_LOADING = false;
                restInit.RETURN_MESSAGE = res.message;
                restInit.IS_RETURN = true;
                restInit.RETURN = res.return;

                this.props.restAction(restInit);
                if (res.return === true) {
                    this.setState({
                        Id: "",
                        startDate_at: "",
                        endDate_at: "",
                    })
                    this.props.navigation.navigate("Successful")
                    this.props.getbooking({})
                }

            });
        } catch (error) {
            this.props.restAction(
                {
                    IS_LOADING: false,
                    IS_RETURN: true,
                    RETURN: false,
                    RETURN_MESSAGE: "Network request failed"
                });

        }
    }

    setUserData = async (authUserInit) => {
        await storeData("authToken", authUserInit.authToken);
        updateAPIConfig(authUserInit.authToken);
        await storeData("userAuthenticates", authUserInit.userAuthenticates);
        await storeData("userType", authUserInit.userType);
        await storeData("id", authUserInit.id);
        await storeData("user", JSON.stringify(authUserInit.user));
    }

    componentDidMount() {
        if (typeof this.props.route.params.item !== "undefined") {
            this.setState({ item: this.props.route.params.item })
        }
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

                {
                    this.state.item != null ?
                    <>
                     <View style={{
                    flex: 1.25,
                    width: wp("98%"),
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookNow')} >
                    <Icon name="keyboard-arrow-left" size={40} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 22,
                    }}>CONFIRM BOOKING</Text>
                </View>

                <View style={styles.card}>
                    <View style={{
                        width: wp('88%'),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'center'
                    }}>
                        <ImageShow
                            url={ (this.state.item.media !== null )? this.state.item.media.url :  "" } 
                            style={{ height: 123, width: 113 }}
                        />

                        <View style={{
                            width: wp('54%'),
                        }}>
                            <Text style={{
                                fontSize: 16,
                            }}>{this.state.item.model_name}</Text>

                            <View style={{
                                flexDirection: 'row',
                                width: wp("50%"),
                                justifyContent: 'space-between',
                                height: 30,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: wp("17%"),
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        borderRightWidth: 1,
                                        borderRightColor: "gray",
                                        width: wp("17%"),
                                    }}>{this.state.item.car_hp} HP</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: wp("17%"),
                                }}>
                                    <Text style={{
                                        width: wp("13%"),
                                        alignSelf: "center",
                                        fontSize: 14,
                                        borderRightWidth: 1,
                                        borderRightColor: "gray",
                                        textAlign:'center'
                                    }}>{this.state.item.car_colour}</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: wp("15%"),
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                    }}>{this.state.item.car_colour} CC</Text>

                                </View>

                            </View>
                            <View style={{
                                alignItems: 'center',
                                paddingRight: 10
                            }}>
                                <Text style={{
                                    backgroundColor: "#707070",
                                    width: wp('52%'),
                                    opacity: 0.5,
                                    height: 2,
                                }}></Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                width: wp("50%"),
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: wp("15%"),
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        width: wp("14%"),
                                    }}>Doors</Text>
                                    <Text style={{
                                        width: wp("8%"),
                                        fontSize: 14,
                                    }}>{this.state.item.doors}</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: wp("15%"),
                                }}>
                                    <Text style={{
                                        width: wp("13%"),
                                        fontSize: 14,
                                    }}>Seats</Text>
                                    <Text style={{
                                        width: wp("6%"),
                                        fontSize: 14,
                                    }}>{this.state.item.car_seats}</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: wp("16%"),
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                    }}>Car Ratio</Text>
                                    <Text style={{
                                        fontSize: 14,
                                    }}>{this.state.item.car_ratio}:{this.state.item.car_ratiotwo}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    alignSelf: 'center',
                }}>

                    <Calendar
                        onDayPress={(day) => { console.log('selected day', day) }}
                        style={{
                            marginTop: 10,
                            height: 220,
                            width: wp("88%"),
                            elevation:4
                        }}

                        theme={{
                            'stylesheet.day.basic': {
                                'base': {
                                    height: 5,
                                    alignItems: 'center'
                                }
                            },
                        }}
                    />
                </View>

                <View style={{
                    flex: 3,
                    flexDirection: 'row',
                    width: wp('84%'),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                }}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: '#272727',
                            fontSize: 12,
                            paddingBottom:10
                        }}>DATE FROM</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Welcome') }}
                            style={{
                                height: 35,
                                width: wp('40%'),
                                backgroundColor: '#272727',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 11,
                                fontWeight: '500'
                            }}>January 01, 2021</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: '#272727',
                            fontSize: 12,
                            paddingBottom:10
                        }}>DATE TO</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Welcome') }}
                            style={{
                                height: 35,
                                width: wp('40%'),
                                backgroundColor: '#DFDEDC',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1
                            }}>
                            <Text style={{
                                color: '#272727',
                                fontSize: 11,
                                fontWeight: '500'
                            }}>January 09, 2021</Text>

                        </TouchableOpacity>

                    </View>

                </View>


                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                    <TouchableOpacity onPress={() => { this.ConfirmBooking() }}
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
                        }}>CONFIRM</Text>
                    </TouchableOpacity>

                </View>

                    </>
:
null
                }
               
               <RestDialogBox />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
    restAction: payload => dispatch(restAction(payload)),
    getbooking: (payload) => dispatch(getbooking(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmBooking);

// const mapStateToProps = state => ({
//     auth: state.auth,
//     vehicle: state.vehicle.currentvehicle
// });

// const mapDispatchToProps = dispatch => ({
//     getsinglevehicle: (payload) => dispatch(getsinglevehicle(payload))

// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ConfirmBooking);




