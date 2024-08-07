import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../Themes/AppThemes';
interface Props{
    textboton:string,
}
const BotonNumeros = ({textboton}:Props) => {
  return (
   <View>
    <TouchableOpacity>
        <Text style={styles.TextBoton} >{textboton}</Text>
    </TouchableOpacity>
   </View>
  )
}

export default BotonNumeros
