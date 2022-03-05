import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from 'react';
import CardHeader from "../../components/src/CardHeader";
import Textbox from "../../components/src/Textbox";
import SubmitButton from "../../components/src/SubmitButton";
import Footer from "../../components/src/Footer";
import { Stack } from "react-native-spacing-system";
import { Appbar } from 'react-native-paper';



const FirstScreen = () => {

    return ( 
        <View style={{flex: 1}}>
            <CardHeader/>
            <Stack size={36} />
            <Textbox/>
            <Stack size={428} />
            <SubmitButton/>
            <Stack size={100} />
            <Footer/>
        </View>
    
     );
}
 
export default FirstScreen;
const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });