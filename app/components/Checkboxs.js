import React, { useState } from 'react';
import { Text ,View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';




const Checkboxs = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
      <View>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
    </View>
  );
}

export default Checkboxs;