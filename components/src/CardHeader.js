import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import RecordButton from './RecordButton';

const CardHeader = () => (
        <Card.Title
            title="Patient's"
            subtitle="Symptoms and Vital Signs"
            right = {(props) => <RecordButton {...props} icon="more-vert" onPress={() => {}}/>}
        />

);

export default CardHeader;


