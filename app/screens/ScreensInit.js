import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from '../components/DrawerContent';
import Welcome from './Welcome'
import Header from '../components/Header'
import Settings from './Settings' 
import TopSheet from '../components/TopSheet'
import PrivacyPolicy from './PrivacyPolicy'
import TermConditions from './TermConditions'
import Faq from './Faq'
import EmergencyContact from './EmergencyContact'
import EmergencyMessage from './EmergencyMessage'
import SosSetting from './SosSetting'
import SleepSetting from './SleepSetting'
import BottomSheet from '../components/BottomSheet'
import LanguageSetting from './LanguageSetting'
import FeedBack from './FeedBack'
import GoodEvening from '../components/GoodEvening'
import EverythingOk from '../components/EverythingOk'
import TimePicker from '../components/TimePicker'
 import AboutUs from './AboutUs'
 import Practice from './Practice'

 import Splash from './SplashScreen';
import AutomaticReporting from './AutomaticReporting'
import RestDialogBox from '../components/RestDialogBox'
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

const StackRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home1" component={Splash} />
      <Stack.Screen name="SosSetting" component={SosSetting} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="TermConditions" component={TermConditions} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AutomaticReporting" component={AutomaticReporting} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
        <Stack.Screen name="EmergencyMessage" component={EmergencyMessage} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="SleepSetting" component={SleepSetting} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="LanguageSetting" component={LanguageSetting} />
        <Stack.Screen name="GoodEvening" component={GoodEvening} />
        <Stack.Screen name="EverythingOk" component={EverythingOk} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="TimePicker" component={TimePicker} />
      <Stack.Screen name="TopSheet" component={TopSheet} />
      <Stack.Screen name="Practice" component={Practice} />



      







    </Stack.Navigator>
  );
}
const SettingStackNavigator = (navigation) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Splash"
      drawerPosition="left"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{ backgroundColor: '#fff', width: (width * .75) }}
      drawerContentOptions={{
        activeTintColor: '#60f',
        inactiveTintColor: '#000',
      }}
    >
      <Drawer.Screen name="Splash" component={StackSplash}
        options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Home" component={StackRoutes} />
      <Drawer.Screen name="Setting" component={SettingStackNavigator} />
    </Drawer.Navigator>
  );
}


export default () => {
  return <DrawerNavigator />
}