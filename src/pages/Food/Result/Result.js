import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ resultFood }) {
    return (
        <Text style={Styles.resultFood}>{resultFood > 0 ? `Your food have ${resultFood} calories` : ''}</Text>
    );
};
