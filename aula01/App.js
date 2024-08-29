import { View, Text } from 'react-native'
import React from 'react'
import Exercicio01 from './src/components/Exercicio01'
import Exercicio02 from './src/components/Exercicio02'

const App = () => {
  return (
    <View>
      <Exercicio01 name="Klébio"/>
      <Exercicio02 />
    </View>
  )
}

export default App