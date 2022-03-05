import * as React from 'react';
import { Button } from 'react-native-paper';

const SubmitButton = () => (
  <Button 
   mode="contained" 
   color="#28B463"
   onPress={() => console.log('Pressed')}>
    Submit
  </Button>
);

export default SubmitButton;