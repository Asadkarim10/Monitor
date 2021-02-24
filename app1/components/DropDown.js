import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from "react-native";
 import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
class DropD extends Component {
  render() {
    this.state = {
        Language: ['Kg'],

    }
    return (
        <View style = {{
            marginTop:10
        }}> 
            <DropDownPicker
    items={[
        {label: 'Dutch', value: 'Dutch'  },
        {label: 'English US', value: 'English US'},
        {label: 'English Uk', value: 'English Uk' , selected: true, },
        {label: 'Italian', value: 'Italian'},
        {label: 'Spanish', value: 'Spanish'  },
        {label: 'Kg', value: 'Kg'},
    ]}
 

    multiple={true}
     multipleText="Language"
    
    
    dropDownStyle={{backgroundColor: 'white'}}

    defaultValue={this.state.Language}
    containerStyle={{height:hp('5%'), alignSelf:'center', backgroundColor:'#fbfbfb', width:wp('80%'), borderRadius:7, borderWidth:0
}}
    itemStyle={{
        justifyContent: 'flex-start',
    }}
    style = {{
        Textcolor:'white'
    }}
    onChangeItem={item => this.setState({
        Language: item // an array of the selected items
    })}
/>
        </View>
    );
  }
}

export default DropD;







 

 



