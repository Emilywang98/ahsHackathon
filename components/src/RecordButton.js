import * as React from 'react';
import { Button } from 'react-native-paper';

const RecordButton = () => (
  <Button icon="bullhorn-outline"
   mode="contained" 
   color="#f08e25"
   onPress={() => console.log('Pressed')}>
    Record
  </Button>
);

export default RecordButton;