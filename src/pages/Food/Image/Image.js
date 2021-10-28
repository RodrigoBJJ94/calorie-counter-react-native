import React from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import FoodImage from '../../../assets/img/FoodImage.svg';

export default function Image() {
    return (
        <View style={Styles.containerImageFood}>
            <FoodImage width="55%" style={Styles.imageFood} />
        </View>
    );
};
