import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    buttonGoFood: {
        width: Dimensions.get('screen').width / 2,
        height: 45,
        backgroundColor: '#30d4ae',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 4,
    },
    textButtonsMenu: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 22,
        color: '#fff',
    }
});
