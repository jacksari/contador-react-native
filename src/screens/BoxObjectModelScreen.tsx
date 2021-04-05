import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    title: {
        margin: 10,
        fontSize: 40,
        padding: 10,
        textAlign: 'center',
        borderWidth: 5
    }
})