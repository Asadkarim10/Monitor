import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header'
import Iconic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'react-moment';

import { connect } from "react-redux";
import { authUser, logout } from "../actions/authAction";
import ModalUser from '../model/ModalUser'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            showOldPassword: true,
            showNewPassword: true,
            showConfirmPassword: true,
            ismodalshow: false
        }
    }

    callTabsAction = (name) => {
        this.setState(prev => ({

            ismodalshow: false,
            ...{ [name]: true }
        }))
    }
    closeModal = () => {
        this.setState({
            ismodalshow: false,
        })
    }

    setPasswordVisibility = (value) => {
        this.setState(prev => ({
            ...{ [value]: false }
        })
        )
        if (value === "showOldPassword") {
            this.setState({
                showOldPassword: !this.state.showOldPassword,
            })
        }
        if (value === "showNewPassword") {
            this.setState({
                showNewPassword: !this.state.showNewPassword
            })
        }
        if (value === "showConfirmPassword") {
            this.setState({
                showConfirmPassword: !this.state.showConfirmPassword
            })
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

                <View style={{
                    flexDirection: 'row',
                    flex: 1.25,
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('YourBooking')} >
                        <Icon name="keyboard-arrow-left" size={40} />
                    </TouchableOpacity>
                    <View style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            width: wp("56%"),
                            fontSize: 22,
                        }}>YOUR PROFILE</Text>

                        <TouchableOpacity onPress={() => { this.setState({ ismodalshow: true }) }}
                            style={{
                                height: 30,
                                width: wp('30%'),
                                backgroundColor: '#DFDEDC',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1
                            }}>
                            <Text style={{
                                color: '#272727',
                                fontSize: 9,
                                fontWeight: '500'
                            }}>EDIT ACCOUNT</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    height: 100,
                    width: wp('88%'),
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderBottomColor: '#707070',
                    borderBottomWidth: 1
                }}>

                    <Image source={require('../assets/Homepage/Profile.png')} style={{ height: 70, width: 70, }} />
                    <View style={{
                        height: 26,
                        backgroundColor: '#272727',
                        borderRadius: 50,
                        marginTop: 54,
                        marginLeft: -16,
                        width: 26,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 3.84,
                        elevation: 5,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity>
                            <Iconic name="camera" size={14} color='white' />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        paddingLeft: 10,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#272727',
                        }}>{this.props.auth.user.first_name}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#707070'
                        }}>{this.props.auth.user.email}</Text>

                        {/* <View style={{
                            flexDirection: 'row',
                            height: 20,
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            width: wp("50%")
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#707070'
                            }}>Balance Mileage:</Text>
                            <Text style={{
                                fontSize: 12,
                                color: '#272727',
                                opacity: 0.8
                            }}>10,000 KM</Text>

                        </View> */}

                    </View>

                </View>

                <View style={{
                    flex: 4.25,
                    width: wp("88%"),
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: '#272727',
                            fontSize: 16
                        }}>PROFILE INFO</Text>
                    </View>
                    <View style={{
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: wp("84%"),
                            alignSelf: 'center',
                            height: 28,
                        }}>
                            <Text style={{
                                color: '#272727',
                                fontSize: 12
                            }}>EMAIL ADDRESS</Text>
                            <Text style={{
                                color: '#707070',
                                fontSize: 13,
                                opacity: 0.8
                            }}>{this.props.auth.user.email}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: wp("84%"),
                            alignSelf: 'center',
                            height: 28,
                        }}>
                            <Text style={{
                                color: '#272727',
                                fontSize: 12
                            }}>PHONE NUMBER</Text>
                            <Text style={{
                                color: '#707070',
                                fontSize: 13,
                                opacity: 0.8
                            }}>+49 {this.props.auth.user.primary_contact}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: wp("84%"),
                            alignSelf: 'center',
                            height: 28,
                        }}>
                            <Text style={{
                                color: '#272727',
                                fontSize: 12
                            }}>JOIN DATE</Text>
                            <Moment element={Text} style={{
                                color: '#707070',
                                fontSize: 13,
                                opacity: 0.8
                            }} format="MMMM D,YYYY">{this.props.auth.user.created_at ?? ""}</Moment>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: wp("84%"),
                            alignSelf: 'center',
                            height: 28,
                        }}>
                            <Text style={{
                                color: '#272727',
                                fontSize: 12
                            }}>STATUS</Text>
                            <Text style={{
                                color: '#707070',
                                fontSize: 13,
                                opacity: 0.8
                            }}>{this.props.auth.user.status}</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 5.25,
                    width: wp("88%"),
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        color: '#272727',
                        fontSize: 16,
                        paddingBottom: 10
                    }}>CHANGE PASSWORD</Text>
                    <View style={{
                        height: 150,
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        <View style={{
                            width: wp('88%'),
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: 'white',
                            height: 45,
                            flexDirection: 'row',
                            marginBottom: 8,
                        }}>
                            <TextInput
                                placeholderTextColor='#817f81'
                                // onChangeText={(text) =>
                                //     this.setState({ password: text })}
                                secureTextEntry={this.state.showOldPassword}
                                value={this.state.password}
                                placeholder="Old Password"
                                placeholderTextColor="#c0c0c0"
                                style={{
                                    width: wp('80%'),
                                    fontSize: 15,

                                }}

                            />
                            <TouchableOpacity onPress={() => { this.setPasswordVisibility("showOldPassword") }}>
                                <Ionicons name={(this.state.showOldPassword) ? 'eye-off' : 'eye'} size={25} color='#000000' style={{
                                    marginLeft: -5,
                                }} />

                            </TouchableOpacity>

                        </View>

                        <View style={{
                            width: wp('88%'),
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: 'white',
                            height: 45,
                            flexDirection: 'row',
                            marginBottom: 8,
                        }}>
                            <TextInput
                                placeholderTextColor='#817f81'
                                // onChangeText={(text) =>
                                //     this.setState({ password: text })}
                                secureTextEntry={this.state.showNewPassword}
                                value={this.state.password}
                                placeholder="New Password"
                                placeholderTextColor="#c0c0c0"
                                style={{
                                    width: wp('80%'),
                                    fontSize: 15,

                                }}

                            />
                            <TouchableOpacity onPress={() => { this.setPasswordVisibility("showNewPassword") }}>
                                <Ionicons name={(this.state.showNewPassword) ? 'eye-off' : 'eye'} size={25} color='#000000' style={{
                                    marginLeft: -5,
                                }} />

                            </TouchableOpacity>

                        </View>

                        <View style={{
                            width: wp('88%'),
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: 'white',
                            height: 45,
                            flexDirection: 'row',
                        }}>
                            <TextInput
                                placeholderTextColor='#817f81'
                                // onChangeText={(text) =>
                                //     this.setState({ password: text })}
                                secureTextEntry={this.state.showConfirmPassword}
                                value={this.state.password}
                                placeholder="Confirm New Password"
                                placeholderTextColor="#c0c0c0"
                                style={{
                                    width: wp('80%'),
                                    fontSize: 15,
                                }}
                            />
                            <TouchableOpacity onPress={() => { this.setPasswordVisibility("showConfirmPassword") }}>
                                <Ionicons name={(this.state.showConfirmPassword) ? 'eye-off' : 'eye'} size={25} color='#000000' style={{
                                    marginLeft: -5,
                                }} />

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 2.25,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Welcome') }}
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

                <ModalUser ismodalshow={this.state.ismodalshow}
                    closemodal={this.closeModal} />

                <View style={{
                    flex: 0.25,
                }}>
                </View>

            </View>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    getbooking: (payload) => dispatch(getbooking(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
