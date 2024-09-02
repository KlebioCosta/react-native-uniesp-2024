import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio02 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: 'silver',
    },
})

export default Exercicio02