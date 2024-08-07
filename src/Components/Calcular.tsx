import React, { useState } from 'react'
import { Button, View } from 'react-native';
import styles from '../Themes/AppThemes';
interface CalculatorProps {
  value1: string;
  value2: string;
  onCalculate: (result: string | number) => void;
}
const Calcular = ({ value1, value2, onCalculate: Calcular }: CalculatorProps) => {
  const calculo = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 !== 0) {
        Calcular(num1 / num2);
      } else {
        Calcular('Error: División por cero');
      }
    } else {
      Calcular('Por favor ingrese números válidos');
    }
  };

  return (
    <View style={styles.BotonEnviar}>
      <Button title="CALCULAR" onPress={calculo} />
    </View>
  );
};


export default Calcular
