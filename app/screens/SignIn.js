import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ImageBackground, Image, ScrollView, Alert, Pressable } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Checkboxs from '../components/Checkboxs'
import { authUser, logout } from "../actions/authAction";
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RestDialogBox from "../components/RestDialogBox";
import { restAction, API_CONTS, storeData } from "../actions/constant";
import { callAPI , updateAPIConfig } from "../api";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'alice@gmail.com',
            password: '1234567890',
            show_password: true,
            showAlert: true,
        }
    }



    setPasswordVisibility = () => {
        this.setState({
            show_password: !this.state.show_password,

        })
    }




    componentDidMount() {
        setTimeout(() => {
            this.props.logout();
        }, 500);
    }

    toggleClick = () => {
        this.props.navigation.toggleDrawer();
    }

    loginClick = () => {
        try {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
            if ( this.state.email === null ){
                this.props.restAction({
                    IS_RETURN: true,
                    RETURN: false,
                    IS_LOADING: false,
                    RETURN_MESSAGE : "Please enter email address"
                })
            } else if  (reg.test(this.state.email) === false) {
                // Yay! valid
                this.props.restAction({
                    IS_RETURN: true,
                    RETURN: false,
                    IS_LOADING: false,
                    RETURN_MESSAGE : "Email address is not valid"
                })
            }

            const restInit = {
                IS_LOADING: true,
                RETURN: false,
                IS_RETURN: false,
                RETURN_MESSAGE: "Something wrong",
            }
            this.props.restAction(restInit);
            const postsData = callAPI(API_CONTS.LOGIN, "post", {
                "username": this.state.email, "password": this.state.password
            }).then(res => {
                restInit.IS_LOADING = false;
                restInit.RETURN_MESSAGE = res.message;
                restInit.IS_RETURN = true;
                restInit.RETURN = res.return;
                if (res.return === false) {
                    this.props.logout();
                    this.props.restAction(restInit);
                } else {
                    const authUserInit = {
                        userType: res.users.usertype,
                        authToken: res.token,
                        userAuthenticates: true,
                        id: res.users.id,
                        user: res.users
                    }
                    restInit.IS_RETURN = false;
                    this.setUserData(authUserInit);
                    this.props.restAction(restInit);
                    this.props.authUser(authUserInit)
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
    render() {
        const { showAlert } = this.state;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#DFDEDC',
                alignItems: 'center',
            },
        });

        return (
            <View style={styles.container}>

                <StatusBar backgroundColor='#009387' barStyle="light-content" />

                <View style={{
                    flex: 1,
                    width: wp("100%"),
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../assets/Homepage/lxrymobility_logo.png')}
                        style={{ height: 35, width: wp("70%") }}
                        resizeMode='contain'
                    />
                </View>

                <View style={{
                    flex: 1.5,
                    width: wp("100%"),
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../assets/Porsche-PNG-Photo.png')}
                        style={{ height: 160, width: wp("80%") }}
                        resizeMode='contain'
                    />
                </View>


                <View style={{
                    flex: 1,
                    width: wp("100%"),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'column'
                }}>
                    <View style={{
                        width: wp('80%'),
                        paddingTop:5
                    }}>
                        <Text style={{
                            color: "#272727",
                            fontSize: 22,
                            textAlign: 'center',
                        }} >LOGIN
                        </Text>
                    </View>
                    <View style={{
                        width: wp("80%")
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#707070',
                            textAlign: 'center',
                        }}
                        >We lend our community the best luxury sports cars, SUVs and dreamcars.</Text>
                    </View>
                </View>

                <View style={{
                    flex: 2,
                    width: wp("100%"),
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        width: wp('90%'),
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: 'white',
                        height: 50,
                        marginBottom: 10
                    }}>
                        <TextInput
                            placeholderTextColor='#707070'
                            onChangeText={(text) =>
                                this.setState({ email: text })}
                            value={this.state.email}
                            placeholder="Email Address"
                            placeholderTextColor="#c0c0c0"
                            style={{
                                width: wp('85%'),
                                fontSize: 15
                            }}
                        />

                    </View>
                    <View style={{
                        width: wp('90%'),
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: 'white',
                        height: 50,
                        flexDirection: 'row',
                    }}>
                        <TextInput
                            placeholderTextColor='#817f81'
                            onChangeText={(text) =>
                                this.setState({ password: text })}
                            secureTextEntry={this.state.show_password}
                            value={this.state.password}
                            placeholder="Password"
                            placeholderTextColor="#c0c0c0"
                            style={{
                                width: wp('80%'),
                                fontSize: 15,
                            }}
                        />
                        <TouchableOpacity onPress={() => { this.setPasswordVisibility() }}>
                            <Ionicons name={(this.state.show_password) ? 'eye-off' : 'eye'} size={25} color='#000000' style={{
                                marginLeft: -5,
                            }} />

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{
                    flex: 1.5,
                    width: wp("100%"),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => { this.loginClick() }}
                        style={{
                            height: 50,
                            width: wp('55%'),
                            backgroundColor: '#272727',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0.8
                        }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: '500'
                        }}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}>
                    <View style={{
                            height: 25,
                            justifyContent: 'flex-end'
                        }}>
                            <Text style={{
                                color: '#707070',
                                fontSize: 15,
                            }}>Not registered? Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
    authUser: payload => dispatch(authUser(payload)),
    restAction: payload => dispatch(restAction(payload)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

