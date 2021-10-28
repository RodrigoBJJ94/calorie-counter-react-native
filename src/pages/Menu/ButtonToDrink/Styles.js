import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    buttonGoDrink: {
        width: Dimensions.get('screen').width / 2,
        height: 45,
        backgroundColor: '#6b63ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    textButtonsMenu: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 22,
        color: '#fff',
    }
});
