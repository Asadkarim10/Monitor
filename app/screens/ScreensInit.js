import React, { Component } from 'react';
import {  Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";
import { getData } from '../actions/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { validateLogin , update, authUser } from "../actions/authAction";

import DrawerContent from '../components/DrawerContent';


import Splash from './SplashScreen';
import BookNow from './BookNow';
import Welcome from './Welcome';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Profile from './Profile';
import Successful from './Successful';
import Home from './Home'
import ConfirmBooking from './ConfirmBooking'
import YourBooking from './YourBooking'

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
const screenOptionStyle = {
  headerTransparent: true,
  headerTitle: null,
  headerLeft: null,
};


const StackSplash = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={
        {
          headerTransparent: true,
          headerTitle: null,
          headerLeft: null,
        }
      }>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}
const AuthRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        {
          headerTransparent: true,
          headerTitle: null,
          headerLeft: null,
        }
      }>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      
    </Stack.Navigator>
  );
}

const CarRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="BookNow" component={BookNow} />
      <Stack.Screen name="Successful" component={Successful}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="ConfirmBooking" component={ConfirmBooking}/>
      <Stack.Screen name='YourBooking' component={YourBooking} />
      
    </Stack.Navigator>
  );
}

class ScreensInit extends Component {
  constructor(props) {
    super(props);
  }
   getUserAuthennticate = async (  ) => {
    const userAuthenticates = await getData("userAuthenticates" );    
    if ( userAuthenticates === "true" ){
    const userType = await getData("userType" );
    const authToken = await getData("authToken" );
    const id = await getData("id" );
    const user = await getData("user" );
      const authUserInit = {
        userType,
        authToken,
        userAuthenticates: true,
        id,
        user: JSON.parse(user)
      }
      this.props.authUser(authUserInit)
    }
  }

 componentDidMount() {
   this.getUserAuthennticate();
   this.props.validateLogin();  
  }

  render() {
    return (

 <Drawer.Navigator
      initialRouteName="Splash"
      drawerPosition="left"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{ backgroundColor: '#fff', alignItems: 'center', width: (width * .75),  }}
      drawerContentOptions={{
        activeTintColor: '#60f',
        inactiveTintColor: '#000',
      }}
    >
      <Drawer.Screen name="Splash" component={StackSplash}
        options={{ swipeEnabled: false }} />
        {
          this.props.auth.userAuthenticates === false
            ?
            <Drawer.Screen name="Home" component={AuthRoutes}
              options={{ swipeEnabled: false }} />
            : null
        }
        {
          this.props.auth.userAuthenticates === true 
            ?
            <Drawer.Screen name="Home" component={CarRoutes} options={{ swipeEnabled: true }} />
            : null
        }
      </Drawer.Navigator> 
    );

  }
}


const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  validateLogin: () => dispatch(validateLogin()),
  update : (payload) => dispatch ( update(payload)),
  authUser : payload => dispatch( authUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreensInit);