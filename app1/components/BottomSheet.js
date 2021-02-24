import React, { Component } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Header from '../components/Header' 
import ServiceName from "../components/ServiceName";
import LatestResponse from '../components/LatestResponse'
import SleepTime from "../components/SleepTime";
import NormalTime from "../components/NormalTime";
export default class BottomSheet extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={700}
          openDuration={250}
          customStyles={{
            container: {
            }
          }}
        >
            
<NormalTime />
          {/* <YourOwnComponent /> */}
        </RBSheet>
      </View>
    );
  }
}