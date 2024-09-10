import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="GO to Details"
            onPress={() => navigation.navigate('Details',{
                itemId: 86,
                otherParam: 'qualquer coisa para exemplo...'
            } ) }

        />
    </View>
  )
}

export default HomeScreen