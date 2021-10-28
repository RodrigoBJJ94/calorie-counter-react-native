import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    captionDrink: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 17,
        marginBottom: 7,
        color: '#fff',
    },
    input: {
        width: Dimensions.get('screen').width / 3,
        fontSize: 20,
        marginBottom: 12,
        borderRadius: 4,
        paddingLeft: 10,
        backgroundColor: '#fff',
    }
});
