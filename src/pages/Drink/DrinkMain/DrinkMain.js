import React, { useState } from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import StatusbarDrink from '../Statusbar/StatusbarDrink';
import Image from '../Image/Image';
import Title from '../Title/Title';
import InputMillilter from '../InputMilliliter/InputMilliliter';
import InputAlcohol from '../InputAlcohol/InputAlcohol';
import Calculate from '../Calculate/Calculate';
import Result from '../Result/Result';
import BackToMenu from '../BackToMenu/BackToMenu';

export default function DrinkMain({ setScreen }) {
    const [milliliter, setMilliliter] = useState(0);
    const [alcohol, setAlcohol] = useState(0);
    const [resultDrink, setResultDrink] = useState(0);

    const drinkBackToMenu = () => {
        setScreen('menu');
        setMilliliter(0);
        setAlcohol(0);
        setResultDrink(0);
    };

    return (
        <View style={Styles.containerDrink}>
            <StatusbarDrink />
            <Image />
            <Title />
            <InputMillilter setMilliliter={setMilliliter} />
            <InputAlcohol setAlcohol={setAlcohol} />
            <Calculate milliliter={milliliter} alcohol={alcohol} setResultDrink={setResultDrink} />
            <Result resultDrink={resultDrink} />
            <BackToMenu drinkBackToMenu={drinkBackToMenu} />
        </View>
    );
};
