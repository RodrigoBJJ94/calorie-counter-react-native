import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    buttonDrinkToMenu: {
        width: Dimensions.get('screen').width / 1.2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 215,
        borderRadius: 4,
        backgroundColor: '#6b63ff',
    },
    buttonTextDrinkToMenu: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 20,
        color: '#fff',
    }
});
