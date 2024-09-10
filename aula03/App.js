import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNaviagation from './src/navigation/AppNaviagation'

const App = () => {
  return (
    <NavigationContainer>
      <AppNaviagation />
    </NavigationContainer>
  )
}

export default App