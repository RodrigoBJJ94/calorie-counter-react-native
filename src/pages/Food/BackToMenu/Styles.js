import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    buttonFoodToMenu: {
        width: Dimensions.get('screen').width / 1.2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 155,
        borderRadius: 4,
        backgroundColor: '#30d4ae',
    },
    buttonTextFoodToMenu: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 20,
        color: '#fff',
    }
});
