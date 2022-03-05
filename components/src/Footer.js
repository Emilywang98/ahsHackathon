import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Footer = () => (
    <Appbar 
    style={styles.bottom} 
    >
    </Appbar>
 );

 export default Footer;

 const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
