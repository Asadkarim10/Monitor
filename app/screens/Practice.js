import React, { Component } from 'react';
import { View, Text, StyleSheet,Switch,Alert,Linking, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Practice extends Component {

  state = {
      taskCreated: false,
      backgroundColor:'yellow',

  };

  onChangeFunction(newState) {
      this.setState(newState, () => Alert.alert("Changed", "==> " + this.state));
  }

  render() {
      return (
        <View style={styles.container}>
            <Switch onValueChange={(value) => this.onChangeFunction({taskCreated: value})}
               value={this.state.taskCreated}
            />
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'white'
  },

  header: {
    flex: 1,
    marginTop: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 2,



  },
  WelcomeNote: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },






});