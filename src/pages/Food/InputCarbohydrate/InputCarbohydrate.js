import React from 'react';
import { Text, TextInput } from 'react-native';
import Styles from './Styles';

export default function InputCarbohydrate({ setCarbohydrate }) {
    const carbohydrates = (value) => {
        setCarbohydrate(value);
    };

    return (
        <>
            <Text style={Styles.captionFood}>Carbohydrate</Text>
            <TextInput keyboardType="numeric" onChangeText={text => carbohydrates(text)} style={Styles.input} />
        </>
    );
};
