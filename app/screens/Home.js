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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
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
                        style={{ height: 47, width: wp("70%") }}
                        resizeMode='contain'
                    />
                </View>

                <View style={{
                    flex: 2,
                    width: wp("100%"),
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: hp("14%"),
                        width: wp('60%'),
                        alignItems: "center",
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: "#272727",
                            fontSize: 18,
                            textAlign: 'center',
                        }} >Welcome Back
                            </Text>
                        <Text style={{
                            fontSize: 16,
                            color: '#707070'
                        }}
                        >Login or Register to continue!</Text>
                    </View>
                </View>

                <View style={{
                    flex: 2,
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
                    justifyContent: 'center'
                }}></View>
                
                <View style={{
                    flex:1,
                    width: wp("100%"),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignIn') }}
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

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}
                        style={{
                            height: 50,
                            width: wp('60%'),
                            backgroundColor: '#DFDEDC',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0.8
                        }}>
                        <Text style={{
                            color: '#4C4C4B',
                            fontSize: 15,
                            fontWeight: '500'
                        }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <RestDialogBox />
                <View style={{
                    flex: 0.5,
                }}>
                </View>
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
)(Home);

