import React, {useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';



const SplashScreen = ({navigation}) => {
    useEffect( () => {
      console.log("test")
      setTimeout( () => {
        navigation.navigate("Home");
      }, 3500 );
    }, [] )
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="fadeIn"
                duraton="1500"
            source={require('../assets/Homepage/lxrymobility_logo.png')}
            style={styles.logo}
            resizeMode="contain"
            />
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  logo: {
      width: height_logo,
      height: height_logo + ( height_logo * 0.5 )
  },
  text: {
      color: 'grey',
      marginTop:0,
      fontSize: 14,
      fontWeight: "bold"
  }
});

