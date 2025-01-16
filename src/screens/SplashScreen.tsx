import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import logo from '../assests/logos/purple_tilted_s.png';

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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    height: 400,
    width: 200,
  },
});
