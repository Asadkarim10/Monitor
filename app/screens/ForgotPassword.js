import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import RestDialogBox from "../components/RestDialogBox";

import { callAPI , updateAPIConfig } from "../api";
import { restAction, API_CONTS, storeData } from "../actions/constant";
import { authUser, logout } from "../actions/authAction";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            show_password: false,
            showAlert: true
        }
    }
    loginClick =  () => {
        try {
            const restInit = {
                IS_LOADING: true,
                RETURN: false,
                IS_RETURN: false,
                RETURN_MESSAGE: "Something wrong",
            }
            this.props.restAction(restInit);
            const postsData = callAPI(API_CONTS.FORGOTEMAIL, "post", {
                "email": this.state.email }).then(res => {
                    if ( res.return === false ){
                        restInit.IS_LOADING = false;
                        restInit.RETURN_MESSAGE = res.message;
                        restInit.IS_RETURN = true;
                        restInit.RETURN = res.return;
                        this.props.restAction(restInit);
                    }else {
                        restInit.IS_LOADING = false;
                        restInit.IS_RETURN = false;

                        this.props.restAction(restInit);
                        this.props.navigation.navigate("UpdatePassword", this.state )
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
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: "#f1f2f4",
            },
            text1: {
                color: "#47516c",
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 10
            },
            text3: {
                color: 'white',
                fontSize: 20,
                fontWeight: "bold"
            },
            text4: {
                color: '#19274c',
                fontSize: 20,
            }
        });
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    backgroundColor: "blue",
                    alignItems: "center",
                    justifyContent: "center"
                }}><Text style={{
                    color: "white",
                    fontSize: 30,
                    fontWeight: "bold"
                }}>Send email to reset</Text></View>

                <View>
                    <Text style={styles.text1}>E-mail
            <Text style={{
                            color: "red"
                        }}> *</Text></Text>
                    <TextInput style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#989fb3",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginRight: 10,
                        marginLeft: 10,
                        marginTop: 5,
                        borderWidth: 1,
                    }}

                        onChangeText={(text) =>
                            this.setState({ email: text })
                        }
                        value={this.state.email}
                        placeholder="Enter your mail"
                        placeholderTextColor="#989fb3"
                    ></TextInput>
                   
                </View>

                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10
                }}>
                    <TouchableOpacity onPress={() => { this.loginClick() }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#295be2",
                            borderWidth: 5,
                            width: wp("94%"),
                            height: 50,
                            borderColor: "#295be2",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        }}>
                            <Text style={styles.text3}>Continue</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("SignIn") }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#f1f2f4",
                            borderWidth: 5,
                            width: wp("94%"),
                            height: 50,
                            borderColor: "#f1f2f4",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            marginTop: 5,
                        }}>
                            <Text style={styles.text4}>Back</Text>
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
)(ForgotPassword);