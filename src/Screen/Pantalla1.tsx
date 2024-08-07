import React from 'react'
import { Button, Text, View } from 'react-native'
import StackNavegator from '../navegator/StackNavegator'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { CommonActions, useNavigation } from '@react-navigation/native'
const Pantalla1 = () => {
    const navigation=useNavigation();
    return (

    <View>
        <Text>BIENVENIDOS</Text>
        <Button
        title='Comenzar'
        onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla2'}))} 
        />
    </View>
  )
}

export default Pantalla1
