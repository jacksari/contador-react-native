import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string,
    onPress: () => void
}

export const Fab = ({ title, onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ .8 }
                style={styles.fabLocationBL}
                onPress={ onPress }
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{ title }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={styles.fabLocationBL}>
                <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                        onPress={ onPress }
                    >
                        <View style={styles.fab}>
                            <Text style={styles.fabText}>{ title }</Text>
                        </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocationBL: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    fab: {
        backgroundColor: '#5846d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    fabText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
