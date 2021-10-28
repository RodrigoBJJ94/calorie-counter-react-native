import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function BackToMenu({ foodBacktoMenu }) {
    return (
        <TouchableOpacity onPress={() => foodBacktoMenu()} style={Styles.buttonFoodToMenu}>
            <Text style={Styles.buttonTextFoodToMenu}>Back to Menu</Text>
        </TouchableOpacity>
    );
};
