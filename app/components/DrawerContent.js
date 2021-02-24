import React, {useState , useEffect} from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { logout } from "../actions/authAction"

const { width } = Dimensions.get('window');

const DrawerContent = (props, navigation) => {

  const [isRental, setIsRentalShow] = useState(0);

  const logoutClick = () => {
    props.navigation.closeDrawer();
    props.logout();
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          height: 100,
          width: wp('68%'),
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          borderBottomColor: '#707070',
          borderBottomWidth:1
        }}>
          <TouchableOpacity onPress={() => { props.navigation.navigate("Profile") }}>
          <Image source={require('../assets/Homepage/Profile.png')} style={{ height: 70, width: 70,}} />
          </TouchableOpacity>
          <View style={{
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
            <Text style={{
              fontSize: 14,
              color: '#272727',
            }}>{props.auth.user.first_name}</Text>
            <Text style={{
              fontSize: 12,
              color: '#707070'
            }}>{props.auth.user.email}</Text>

            {/* <View style={{
              flexDirection: 'row',
              height: 20,
              alignItems: 'flex-end',
              justifyContent : 'space-between',
              width:wp("46%")
            }}>
            <Text style={{
              fontSize: 12,
              color: '#707070'
            }}>Balance Mileage:</Text>
            <Text style={{
              fontSize: 12,
              color: '#272727',
              opacity:0.8
            }}>10,000 KM</Text>

            </View> */}

          </View>

        </View>

        <View style={{
          height: hp('22%'),
          justifyContent: 'center',
        }}>
          <View style={{
            borderTopColor: '#d9d9d9',
            height: hp("5%"),
            width: wp('70%'),
            alignSelf: 'center',
            justifyContent: "center"
          }}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("Profile") }}>
              <View style={{
                flexDirection: 'row',
                width: wp('65%'),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
                <Text style={{
                  fontSize: 14,
                }}>YOUR PROFILE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{
            borderTopColor: '#d9d9d9',
            height: hp("6%"),
            width: wp('70%'),
            alignSelf: 'center',
            justifyContent: "center"
          }}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("Welcome" , {isRental:1})   }}>
              <View style={{
                flexDirection: 'row',
                width: wp('65%'),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
                <Text style={{
                  fontSize: 14,
                  fontWeight: '500'
                }}>BOOK A CAR</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{
            borderTopColor: '#d9d9d9',
            height: hp("5%"),
            width: wp('70%'),
            alignSelf: 'center',
            justifyContent: "center"
          }}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("YourBooking") }}>
              <View style={{
                flexDirection: 'row',
                width: wp('65%'),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
                <Text style={{
                  fontSize: 14,
                }}>YOUR BOOKINGS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* last Section */}

      <View style={{
        height: hp('58%'),
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <View style={{
          borderTopColor: '#d9d9d9',
          height: hp("6%"),
          width: wp('70%'),
          alignSelf: 'center',
          justifyContent: "center"
        }}>
          <TouchableOpacity onPress={() => { props.navigation.navigate("Profile") }}>
            <View style={{
              flexDirection: 'row',
              width: wp('65%'),
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>

              <Text style={{
                fontSize: 14,
              }}>HELP</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{
          height: 70,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          alignSelf: 'center',
          paddingTop: 10
        }}>
          <TouchableOpacity onPress={() => { logoutClick() }}>
            <View style={{
              flexDirection: 'row',
              height: 40,
              width: wp('65%'),
            }} >

              <Text style={{
                fontSize: 14,
                fontWeight: '500'
              }}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>



      {/* last section */}
    </DrawerContentScrollView>

  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerContent);