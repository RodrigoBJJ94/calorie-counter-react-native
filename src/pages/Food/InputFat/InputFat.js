import React from 'react';
import { Text, TextInput } from 'react-native';
import Styles from './Styles';

export default function InputFat({ setFat }) {
    const fats = (value) => {
        setFat(value);
    };

    return (
        <>
            <Text style={Styles.captionFood}>Fat</Text>
            <TextInput keyboardType="numeric" onChangeText={text => fats(text)} style={Styles.input} />
        </>
    );
};
