import React from 'react'
import { Button, Text, View } from 'react-native'
import StackNavegator from '../navegator/StackNavegator'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { CommonActions, useNavigation } from '@react-navigation/native'
import styles from '../Themes/AppThemes'
const Pantalla1 = () => {
    const navigation=useNavigation();
    return (

    <View>
        <Text style={styles.title}>BIENVENIDOS</Text>
        <View style={styles.primerboton}>
        <Button
        title='Comenzar'
        onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla2'}))} 
        />
        </View>
    </View>
  )
}

export default Pantalla1
