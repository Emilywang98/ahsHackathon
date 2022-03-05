import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import FirstScreen from './pages/src/FirstScreen';
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>

    <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Alberta Health Services" component={FirstScreen} 
                  options={{ headerStyle: {
                    backgroundColor: '#6D14F4'
                  }}}/>
              </Stack.Navigator>
    </NavigationContainer>
  );
}

