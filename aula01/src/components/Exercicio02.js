import { View, Text, Button, StyleSheet} from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio02 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }
    function decrementar() {
        setContador(contador -1)
    }

  return (
    <View style ={Styles.container}>
        <Button title='incrementar' onPress={incrementar} />

        <Text>O contador está em: {contador}</Text>

        <Button title='decrementar' onPress={decrementar} />

    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyCounter: 'center',
        padding: 100,
        backgroundColor: 'silver'
    }
}
)

export default Exercicio02