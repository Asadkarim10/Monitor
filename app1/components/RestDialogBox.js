
import React, { Component } from 'react';
import { connect } from "react-redux";
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AwesomeAlert from 'react-native-awesome-alerts';
import Spinner from "react-native-spinkit"
 import { restAction } from "../actions/constant";

class RestDialogBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 100,
            color: "#FFFFFF",
            isVisible: true,
            type: "WanderingCubes"
        }
    }
    hideAlert = () => {
        this.props.restAction({
            IS_RETURN: false
        })
    };
    render() {
        return (
            <>
                {
                    this.props.rest.IS_LOADING === true
                        ?
                        <View style={{
                            position: "absolute",
                            width: wp("100%"),
                            height: hp("100%"),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'black',
                            opacity: 0.8
                        }}>

                            <Spinner style={{
                                marginBottom: 50
                            }} isVisible={this.state.isVisible} size={this.state.size} type={this.state.type} color={this.state.color} />
                        </View>
                        : null
                }
                {
                    this.props.rest.IS_RETURN === true
                        ?
                        <AwesomeAlert
                            show={this.props.rest.IS_RETURN}
                            showProgress={false}
                            contentContainerStyle={{
                                width: wp("80%")
                            }}
                            title={(this.props.rest.RETURN) ? "Success" : "Error!"}
                            titleStyle={{
                                fontSize: 30
                            }}
                            message={this.props.rest.RETURN_MESSAGE ?? ""}
                            messageStyle={{
                                fontSize: 20
                            }}
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={false}
                            showConfirmButton={true}
                            cancelText="No, cancel"
                            confirmText="Close"
                            confirmButtonStyle={{
                                width: wp("30%"),
                                alignItems: "center"
                            }}
                            confirmButtonTextStyle={{
                                fontSize: 20
                            }}
                            confirmButtonColor={(this.props.rest.RETURN) ? "green" : "#DD6B55"}
                            onCancelPressed={() => {
                                this.hideAlert();
                            }}
                            onConfirmPressed={() => {
                                this.hideAlert();
                            }}
                        />
                        : null
                }
            </>
        );
    }
}

const mapStateToProps = state => ({
    rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
    restAction: payload => dispatch(restAction(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestDialogBox);