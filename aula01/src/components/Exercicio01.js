import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio01 = ({ name }) => {
  return (

    <View >
      <Text style = {Styles.container}> Olá, seja bem-vindo {name} </Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        color: 'blue',
        padding: 90

    }
})

export default Exercicio01