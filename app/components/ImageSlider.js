import React, { Component } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SliderBox } from "react-native-image-slider-box";
 
export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree",
        "https://source.unsplash.com/1024x768/?tree",

    
      ]
    };
  }
 
  render() {
    return (
      <View  style = {{
        alignSelf:'center',
        width:wp('90%')
      }} >
        <SliderBox
            style={{width: 370,height:200, borderRadius:6}}
          images={this.state.images}
          dotColor="white"
          inactiveDotColor="#90A4AE"


         // sliderBoxHeight={200}
          
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}
 