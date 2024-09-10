import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio05 = () => {
    
  return (
    <View style={styles.container}>
        <View style={styles.bodyStyle}>
            <Text>Cabeçalho</Text>
        </View>
        
        <View style={styles.bodyStyle}>
            <Text>Área de Entrada</Text>
        </View>

        <View style={styles.listStyle}>
            <Text>Lista de tarefas</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerStyle: {
        fontStyle: 'italic',
    
    },
    bodyStyle: {

    },
    listStyle: {

    }
})

export default Exercicio05