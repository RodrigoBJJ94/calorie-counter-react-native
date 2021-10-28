import React from 'react';
import { Text, TextInput } from 'react-native';
import Styles from './Styles';

export default function InputProtein({ setProtein }) {
    const proteins = (value) => {
        setProtein(value);
    };

    return (
        <>
            <Text style={Styles.captionFood}>Protein</Text>
            <TextInput keyboardType="numeric" onChangeText={text => proteins(text)} style={Styles.input} />
        </>
    );
};
