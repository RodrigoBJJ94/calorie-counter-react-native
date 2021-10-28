import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Title() {
    return (
        <Text style={Styles.titleDrink}>Inform bellow how many milliliters (ml) of drink you have and what's its alcohol by volume (ABV)</Text>
    );
};
