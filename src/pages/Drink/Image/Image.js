import React from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import DrinkImage from '../../../assets/img/DrinkImage.svg';

export default function Image() {
    return (
        <View style={Styles.containerImageDrink}>
            <DrinkImage width="58%" style={Styles.imageDrink} />
        </View>
    );
};
