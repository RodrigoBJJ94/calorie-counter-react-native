import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ resultDrink }) {
    return (
        <Text style={Styles.resultDrink}>{resultDrink > 0 ? `Your drink have ${resultDrink} calories` : ''}</Text>
    );
};
