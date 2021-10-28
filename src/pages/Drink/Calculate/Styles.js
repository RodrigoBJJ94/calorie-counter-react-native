import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    buttonDrink: {
        width: Dimensions.get('screen').width / 2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4,
        backgroundColor: '#6b63ff',
    },
    buttonTextDrink: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 22,
        color: '#fff',
    },
});
