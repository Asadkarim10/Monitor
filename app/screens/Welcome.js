import React, { Component, useRef } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/Header'
import YourCars from '../components/YourCars'
import Moment from 'react-moment';
import { getvehicle } from '../actions/vehicleAction'

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.ScrollRef = React.createRef();
        this.state = {
            isYourCarShow: true,

        }
    }



    onPressScroll = (value) => {
        this.setState(prev => ({

            isYourCarShow: false,


            ...{ [value]: true }
        }))
    }
    render() {
        // const ScrollRef = useRef();
        // const onPressScroll = () => {
        //     ScrollRef.current?.scrollTo({
        //         x: 0,
        //         animated: true
        //     });
        // }
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#DFDEDC'
            },
            WelcomeNote: {
                flex: 1.5,
                justifyContent: 'center',
            },

        });
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />

                <View style={styles.WelcomeNote}>

                    <View style={{
                        width: wp('88%'),
                        alignSelf: 'center',
                    }}>
                        <Text style={{
                            color: '#272727',
                            fontSize: 18,
                        }}>WELCOME</Text>

                        <Text style={{
                            color: '#707070',
                            fontSize: 16,
                        }}>Select and view your desired vehicle!</Text>

                    </View>

                </View>

                <View style={{
                    flex: 10,
                }}>

                    <ScrollView>

                        {
                            this.state.isYourCarShow === true ?
                                <YourCars navigation={this.props.navigation} />

                                :
                                null
                        }

                    </ScrollView>

                </View>


            </View>
        );
    }
}


// const mapStateToProps = state => ({
//     auth: state.auth,
//     rest: state.rest,
//     vehicle: state.vehicle
// });

// const mapDispatchToProps = dispatch => ({
//     getvehicle: (payload) => dispatch(getvehicle(payload))

// });

export default Welcome
    // mapStateToProps,
    // mapDispatchToProps

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Welcome);


