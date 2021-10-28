import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function ButtonToDrink({ setScreenDrink }) {
    return (
        <TouchableOpacity onPress={setScreenDrink} style={Styles.buttonGoDrink}>
            <Text style={Styles.textButtonsMenu}>Drink</Text>
        </TouchableOpacity>
    );
};
