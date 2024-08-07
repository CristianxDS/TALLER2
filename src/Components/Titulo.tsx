import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
interface Props{
    title:string
}

const Titulo = ({title}:Props) => {
    const{height}=useWindowDimensions();
  return (
    <Text style={{height:height*0.20}}>{title}</Text>
  )
}

export default Titulo
