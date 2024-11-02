import { Alert, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../firebaseConfig'
const Home = () => {

    const LogoutHandler = async () => {
        try {
            await signOut(FIREBASE_AUTH);
            console.log("User signed out")
        } catch (error) {
            console.log(error)
            alert("Logout Error", error.message)
        }
    }

  return (
    <View>
            <Button title='Logout' onPress={LogoutHandler}/>
    </View>
  )
}   

export default Home

const styles = StyleSheet.create({})