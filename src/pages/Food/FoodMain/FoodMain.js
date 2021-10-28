import React, { useState } from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import StatusbarFood from '../Statusbar/StatusbarFood';
import Image from '../Image/Image';
import Title from '../Title/Title';
import InputProtein from '../InputProtein/InputProtein';
import InputCarbohydrate from '../InputCarbohydrate/InputCarbohydrate';
import InputFat from '../InputFat/InputFat';
import Calculate from '../Calculate/Calculate';
import Result from '../Result/Result';
import BackToMenu from '../BackToMenu/BackToMenu';

export default function FoodMain({ setScreen }) {
    const [protein, setProtein] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0);
    const [fat, setFat] = useState(0);
    const [resultFood, setResultFood] = useState(0);

    const foodBacktoMenu = () => {
        setScreen('menu');
        setProtein(0);
        setCarbohydrate(0);
        setFat(0);
        setResultFood(0);
    };

    return (
        <View style={Styles.containerFood}>
            <StatusbarFood />
            <Image />
            <Title />
            <InputProtein setProtein={setProtein} />
            <InputCarbohydrate setCarbohydrate={setCarbohydrate} />
            <InputFat setFat={setFat} />
            <Calculate protein={protein} carbohydrate={carbohydrate} fat={fat} setResultFood={setResultFood} />
            <Result resultFood={resultFood} />
            <BackToMenu foodBacktoMenu={foodBacktoMenu} />
        </View>
    );
};
