import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={style.container}>
            <Text style={style.caja1}>Caja 1</Text>
            <Text style={style.caja2}>Caja 2</Text>
            <Text style={style.caja3}>Caja 3</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    caja1: {
        textAlign: 'center',
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        textAlign: 'center',
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        textAlign: 'center',
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
})
