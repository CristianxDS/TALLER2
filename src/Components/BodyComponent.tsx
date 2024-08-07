import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import styles from '../Themes/AppThemes';

const BodyComponent = (props:any) => {
  const{height}=useWindowDimensions();
    return (
    <View style={{...styles.ContentBody,
    height:height*0.80}}>
{props.children}
    </View>
  )
}

export default BodyComponent
