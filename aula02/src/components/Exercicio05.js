import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Exercicio05 = () => {
    const [text, setText] = useState('')
    const [books, setBooks] = useState([])
    
    const handleAddBooks = () => {
        if(text.trim()) {
            setBooks([...books, text])
            setText('')
        }
    }
  return (
    <View style={styles.container}>

        <View style={styles.headerStyle}>
            <Text style={styles.headerTitleStyle}>BIBLIOTECA</Text>
        </View>

        <View style={styles.subTitleStyle}>
        <Text style={styles.headerSubStyle}>Controle de Livros</Text>
        </View>
        
        <View style={styles.bodyStyle}>
            <Text>Saida de Livros</Text>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder='Digite o nome do Livro aqui...'
                placeholderTextColor={'silver'}
                style={styles.textInput}
            />
            <Button title="Adicionar Livro" onPress={handleAddBooks}/>
        </View>

        <View style={styles.listStyle}>
            <Text>Livros com saida</Text>
            {books.map((book, index) => (
                <Text key={index} >{book}</Text>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',

    },
    headerStyle: {
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 90,
        alignItems: 'center',

    },
    headerTitleStyle: {
        textAlign: 'center',
        fontSize: 26,
        fontFamily: 'serif',
        fontStyle: 'italic',
        color: 'red',
    },
    subTitleStyle: {
        alignItems: 'center',
        margin: 20
    },
    headerSubStyle: {
        fontSize: 20,
        alignItems: 'center',
        color: 'red',
    },
    bodyStyle: {
        marginTop: 30,

    },
    textInput: {
        borderColor: 'red'
    },
    listStyle: {

    }
})

export default Exercicio05