import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    buttonFood: {
        width: Dimensions.get('screen').width / 2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4,
        backgroundColor: '#30d4ae',
    },
    buttonTextFood: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 22,
        color: '#fff',
    }
});
