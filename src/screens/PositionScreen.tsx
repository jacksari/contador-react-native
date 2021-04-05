import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.cajaMorada}></View>
            <View style={style.cajaVerde}></View>
            <View style={style.cajaRoja}></View>
            <View style={style.cajaNaranja}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        borderWidth: 5,
        borderColor: 'white',
        //position: 'absolute',
        //bottom: 0,
        //left: 0,
        //top: 0,
        //right: 0,
        ...StyleSheet.absoluteFillObject,
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    cajaRoja: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 5,
        borderColor: 'white'
    }
})
