import React, { Component } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SliderBox } from "react-native-image-slider-box";
 
export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    const images = [];
    if ( typeof this.props.media !== "undefined" ){
      if ( this.props.media.length > 0  ){
        this.props.media.map( (item, index) => {
          images.push(item.url);
        })
      }
    }
    if ( typeof this.props.url !== "undefined" ){
      images.push( this.props.url );
    }
    this.setState({images})
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width
    });
  };
 
  render() {
    return (
      <View  
      onLayout={this.onLayout}
      style = {{
          width: wp("90%"),
          alignSelf: 'center',
      }} >
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={hp("34%")}
          dotColor="#272727"

          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          inactiveDotColor="#DFDEDC"
          parentWidth={this.state.width}
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}
 