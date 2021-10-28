import React from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Calculate({ milliliter, alcohol, setResultDrink }) {
    const calculateDrink = () => {
        if ((milliliter === 0 || milliliter === '') && (alcohol === 0 || alcohol === '')) {
            Alert.alert('', 'Please inform the requested data!');
            setResultDrink(0);
        } else if (milliliter === 0 || milliliter === '') {
            Alert.alert('', 'Plase inform how many ml your drink have!');
            setResultDrink(0);
        } else if (alcohol === 0 || alcohol === '') {
            Alert.alert('', 'Please informe the ABV of your drink!');
            setResultDrink(0);
        } else {
            let caloriesDrink = Number(milliliter * alcohol / 100 * 7).toFixed(0);
            setResultDrink(caloriesDrink);
        };
    };

    return (
        <TouchableOpacity onPress={calculateDrink} style={Styles.buttonDrink} >
            <Text style={Styles.buttonTextDrink}>Calculate</Text>
        </TouchableOpacity >
    );
};
