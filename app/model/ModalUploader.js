import * as React from 'react';
import { Modal, Text, Button, Provider } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'


const ModalUploader = (props) => {
    React.useState(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
    },[]);
    
  
  return (

    <Modal visible={props.ismodalshow} onDismiss={props.closemodal}
    >
      <View style={{
        backgroundColor: 'white',
        height: "auto",
        width: "94%",
        marginLeft: "3%",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "transparent",
        overflow: "hidden"

      }} >


      </View>
      
    </Modal>
  );
};

export default ModalUploader;