import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Arrived = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={() => props.navigation.navigate('Order')}>
                    <View style={styles.Maincard}>

                        <View style={styles.subcard}>
                            <Text style={styles.carddescrip} >Delivery Time</Text>
                            <Text style={styles.cardTime}>05:00</Text>
                            <Text style={styles.cardtimes}>PM</Text>
                        </View>
                        <View style={styles.subcards}>
                            <View style={styles.head} >
                                <Text style={styles.customer}>Customer Name</Text>
                                <Text style={{ fontWeight: '600', fontSize: 14 }}>Mr.ABC DEF GHI</Text>

                            </View>
                            <View style={styles.statuscards} >
                                <Text style={styles.status}>Status</Text>
                                <Text style={styles.Arrived}>Arrived</Text>
                            </View>

                        </View>
                        <View style={styles.subcardsl}>

                            <View style={styles.head1}>
                                <Text style={styles.order}>Order ID</Text>
                                <Text style={{ fontWeight: '500' }}>123456*569 </Text>

                            </View>
                            <View style={styles.cardorder}>
                                <Text style={styles.orderamount}>Order Amount</Text>
                                <Text style={styles.amount}>$ 25.50</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>

                <View style={styles.Maincard}>
                    <View style={styles.subcard}>
                        <Text style={styles.carddescrip} >Delivery Time</Text>
                        <Text style={styles.cardTime}>05:00</Text>
                        <Text style={styles.cardtimes}>PM</Text>
                    </View>
                    <View style={styles.subcards}>
                        <View style={styles.head} >
                            <Text style={styles.customer}>Customer Name</Text>
                            <Text style={{ fontWeight: '600', fontSize: 14 }}>Mr.ABC DEF GHI</Text>

                        </View>
                        <View style={styles.statuscards} >
                            <Text style={styles.status}>Status</Text>
                            <Text style={styles.Arrived}>Arrived</Text>
                        </View>

                    </View>

                    <View style={styles.subcardsl}>

                        <View style={styles.head1}>
                            <Text style={styles.order}>Order ID</Text>
                            <Text style={{ fontWeight: '500', fontSize: 14 }}>123456*569 </Text>

                        </View>
                        <View style={styles.cardorder}>
                            <Text style={styles.orderamount}>Order Amount</Text>
                            <Text style={styles.amount}>$ 25.50</Text>
                        </View>
                    </View>
                </View>



                <TouchableOpacity onPress={() => props.navigation.navigate('Order')}>
                    <View style={styles.Maincard}>

                        <View style={styles.subcard}>
                            <Text style={styles.carddescrip} >Delivery Time</Text>
                            <Text style={styles.cardTime}>05:00</Text>
                            <Text style={styles.cardtimes}>PM</Text>
                        </View>
                        <View style={styles.subcards}>
                            <View style={styles.head} >
                                <Text style={styles.customer}>Customer Name</Text>
                                <Text style={{ fontWeight: '600', fontSize: 14 }}>Mr.ABC DEF GHI</Text>

                            </View>
                            <View style={styles.statuscards} >
                                <Text style={styles.status}>Status</Text>
                                <Text style={styles.Arrived}>Arrived</Text>
                            </View>

                        </View>
                        <View style={styles.subcardsl}>

                            <View style={styles.head1}>
                                <Text style={styles.order}>Order ID</Text>
                                <Text style={{ fontWeight: '500' }}>123456*569 </Text>

                            </View>
                            <View style={styles.cardorder}>
                                <Text style={styles.orderamount}>Order Amount</Text>
                                <Text style={styles.amount}>$ 25.50</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>

                <View style={styles.Maincard}>
                    <View style={styles.subcard}>
                        <Text style={styles.carddescrip} >Delivery Time</Text>
                        <Text style={styles.cardTime}>05:00</Text>
                        <Text style={styles.cardtimes}>PM</Text>
                    </View>
                    <View style={styles.subcards}>
                        <View style={styles.head} >
                            <Text style={styles.customer}>Customer Name</Text>
                            <Text style={{ fontWeight: '600', fontSize: 14 }}>Mr.ABC DEF GHI</Text>

                        </View>
                        <View style={styles.statuscards} >
                            <Text style={styles.status}>Status</Text>
                            <Text style={styles.Arrived}>Arrived</Text>
                        </View>

                    </View>

                    <View style={styles.subcardsl}>

                        <View style={styles.head1}>
                            <Text style={styles.order}>Order ID</Text>
                            <Text style={{ fontWeight: '500', fontSize: 14 }}>123456*569 </Text>

                        </View>
                        <View style={styles.cardorder}>
                            <Text style={styles.orderamount}>Order Amount</Text>
                            <Text style={styles.amount}>$ 25.50</Text>
                        </View>
                    </View>
                </View>






            </ScrollView>
        </View>



    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Maincard: {
        width: wp('90%'),
        height: hp('13%'),
        marginBottom: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,


    },

    subcard: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: wp('30%'),
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#2bc5c1'
    },

    carddescrip: {
        color: 'white',
        fontSize: 14,
        height: 25,
        paddingTop: 5,
        fontWeight: '600'

    },

    cardTime: {
        color: 'white',
        fontSize: 33,
        paddingTop: 5,
        fontWeight: '600',
    },

    cardtimes: {
        fontSize: 23,
        color: 'white',
        height: 25,
    },

    subcards: {
        width: wp('30%'),
        paddingLeft: 17,
        backgroundColor: '#ffffff'
    },

    subcardsl: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: wp('30%'),
        paddingLeft: 10,
        backgroundColor: '#ffffff'
    },

    head: {

        justifyContent: 'center',
        height: 58,
        width: wp('29%'),
        alignSelf: 'center'


    },

    customer: {
        color: '#a0a0a0',
        fontSize: 12,
        fontWeight: '600',
        height: 17
    },


    statuscards: {
        justifyContent: 'center',
        height: 40,
        width: wp('29%'),
        alignSelf: 'center'
    },

    status: {
        fontSize: 12,
        color: '#9e9e9e'
    },

    Arrived: {
        fontSize: 14,
        fontWeight: '600',

    },

    head1: {
        justifyContent: 'center',
        height: 54,
        width: wp('29%'),
        alignSelf: 'center'
    },

    order: {
        color: '#a0a0a0',
        fontSize: 12,
        height: 17,
        fontWeight: '400'
    },

    cardorder: {
        justifyContent: 'center',
        height: 58,
        width: wp('29%'),
        alignSelf: 'center'
    },

    orderamount: {
        fontSize: 12,
        color: '#9e9e9e'
    },

    amount: {
        fontSize: 14,
        height: hp('3%'),
        width: wp('10%'),
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },




});



export default Arrived;