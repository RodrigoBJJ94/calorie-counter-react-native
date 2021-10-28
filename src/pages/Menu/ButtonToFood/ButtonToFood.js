import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function ButtonToFood({ setScreenFood }) {
    return (
        <TouchableOpacity onPress={setScreenFood} style={Styles.buttonGoFood}>
            <Text style={Styles.textButtonsMenu}>Food</Text>
        </TouchableOpacity>
    );
};
