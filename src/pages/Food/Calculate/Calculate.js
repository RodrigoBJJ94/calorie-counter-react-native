import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Styles from './Styles';

export default function Calculate({ protein, carbohydrate, fat, setResultFood }) {
    const calculateFood = () => {
        if ((protein === 0 || protein === '') && (carbohydrate === 0 || carbohydrate === '') && (fat === 0 || fat === '')) {
            Alert.alert('', 'Please enter at least one macronutrient!');
            setResultFood(0);
        } else {
            let caloriesFood = Number((protein * 4) + (carbohydrate * 4) + (fat * 9)).toFixed(0);
            setResultFood(caloriesFood);
        };
    };

    return (
        <TouchableOpacity onPress={calculateFood} style={Styles.buttonFood}>
            <Text style={Styles.buttonTextFood}>Calculate</Text>
        </TouchableOpacity>
    );
};
