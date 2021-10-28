import React from 'react';
import { Text, TextInput } from 'react-native';
import Styles from './Styles';

export default function InputAlcohol({ setAlcohol }) {
    const alcohols = (value) => {
        setAlcohol(value);
    };

    return (
        <>
            <Text style={Styles.captionDrink}>Alcohol by Volume (ABV)</Text>
            <TextInput keyboardType="numeric" onChangeText={text => alcohols(text)} style={Styles.input} />
        </>
    );
};
