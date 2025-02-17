import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import logo from '../assests/logos/bulb_bittersweet_transparent.png';
import { color } from '../style/colors';

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={logo} style={styles.imgContainer} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    height: 210,
    width: 270,
  },
});
