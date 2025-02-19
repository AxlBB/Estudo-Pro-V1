import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = () => {
  return <Image style={styles.image} source={require('../assets/Logo3EstudoPro.png')} />
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    heigt: 128,
    borderRadius: 30
  },
});

export default Logo;
