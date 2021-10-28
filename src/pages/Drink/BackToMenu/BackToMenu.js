import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function BackToMenu({ drinkBackToMenu }) {
    return (
        <TouchableOpacity onPress={() => drinkBackToMenu()} style={Styles.buttonDrinkToMenu}>
            <Text style={Styles.buttonTextDrinkToMenu}>Back to Menu</Text>
        </TouchableOpacity>
    );
};
