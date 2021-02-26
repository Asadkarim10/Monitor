import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Header = (props) => {
    const toggleClick = () => {
        props.navigation.toggleDrawer();
    }
    return (
        <View style={{
            height:70,
            backgroundColor:"#DFDEDC",
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            borderBottomColor:"#707070",
            borderBottomWidth:1,
            width:wp("94%")
        }}>

            <View style={{
                backgroundColor: "#DFDEDC",
                width:wp("100%"),
                justifyContent:"space-between",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() => toggleClick()}
                    style={styles.text3}>
                    <SimpleLineIcons name="menu" size={22} color="black" />
                </TouchableOpacity>

                    <Image
                        source={require('../assets/Homepage/lxrymobility_logo.png')}
                        style={{ height: 40, width: wp("40%") ,marginTop:10}}
                        resizeMode='contain'
                    />
                <View style={{
                    marginRight:11
                }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}> 
                    <Image style={{
                        width: 38,
                        height: 35,
                    }}
                        source={require('../assets/Homepage/Profile.png')}
                    />
                    </TouchableOpacity>
                </View>

            </View>

        </View>



    );
}



const styles = StyleSheet.create({

    text1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },

    text3: {
        backgroundColor: "white",
        width: 40,
        height: 35,
        borderColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:11
    },





 

})

export default Header;