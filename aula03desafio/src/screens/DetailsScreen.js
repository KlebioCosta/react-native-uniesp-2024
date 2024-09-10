import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {

    const { user } = route.params
    const profileImage = user.gender === 'male' ? require('../../assets/profile_man.png') 
    : require('../../assets/profile_woman.png')
  return (
    <View style={styles.container} >
        <Image source={profileImage} style={styles.profileImage } />
        <Text style={styles.userName}>Name: {user.name} 
        <Text style={styles.detail} ></Text>
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    userCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginVertical: 10,
      padding: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontSize: 18,
    }
  });
export default DetailsScreen