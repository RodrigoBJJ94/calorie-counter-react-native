import React from 'react';
import { Text, TextInput } from 'react-native';
import Styles from './Styles';

export default function InputMillilter({ setMilliliter }) {
    const milliliters = (value) => {
        setMilliliter(value);
    };

    return (
        <>
            <Text style={Styles.captionDrink}>Milliliters (ml)</Text>
            <TextInput keyboardType="numeric" onChangeText={text => milliliters(text)} style={Styles.input} />
        </>
    );
};
