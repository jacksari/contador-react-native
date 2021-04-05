import React,{ useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
    const [contador, setcontador] = useState(10)
    return (
        <View style={styles.container}>
            <View style={styles.contadorContainer}>
                <Text style={styles.contador}>Contador: {contador}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Fab
                    title="-1"
                    onPress={ () => setcontador(contador - 1) }
                />
                <Fab
                    title="10"
                    onPress={ () => setcontador(10) }
                />
                <Fab
                    title="+1"
                    onPress={ () => setcontador(contador + 1) }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    contadorContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    contador: {
        textAlign: 'center',
        fontSize: 40,
        top: -20,
    },
    btnContainer:{
        alignContent: 'flex-end',
        //borderColor: 'red',
        //borderStyle: 'solid',
        //borderWidth: 1,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10
    },
    
})
