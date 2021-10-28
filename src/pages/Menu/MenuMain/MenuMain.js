import React from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import StatusBarMenu from '../Statusbar/StatusbarMenu';
import Title from '../Title/Title';
import Caption from '../Caption/Caption';
import ButtonToFood from '../ButtonToFood/ButtonToFood';
import ButtonToDrink from '../ButtonToDrink/ButtonToDrink';

export default function Menu({ setScreen }) {
    const setScreenFood = () => {
        setScreen('food');
    };

    const setScreenDrink = () => {
        setScreen('drink');
    };

    return (
        <View style={Styles.containerMenu}>
            <StatusBarMenu />
            <Title />
            <Caption />
            <ButtonToFood setScreenFood={setScreenFood} />
            <ButtonToDrink setScreenDrink={setScreenDrink} />
        </View>
    );
};
