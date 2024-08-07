import React, { useState } from 'react'
import { Text, View } from 'react-native'
import BodyComponent from '../Components/BodyComponent';
import Titulo from '../Components/Titulo';
import Inputbuton from '../Components/Inputbuton';
import styles from '../Themes/AppThemes';
import BotonNumeros from '../Components/BotonNumeros';
import Calcular from '../Components/Calcular';

const Pantalla2 = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState<null | number | string>(null);
    const handleCalculate = (result: string | number) => {
        setResult(result);
      };
  return (
    <View>
        <BodyComponent>
            <Titulo  title='FORMULARIO: '/>
            <View style={styles.ContentInput}>
                <Inputbuton placeholder='Ingrese un Numero' onChange={setValue1}/>
                <Inputbuton placeholder='Ingrese un Numero' onChange={setValue2}/>
            </View>
            <View>
            <Calcular value1={value1} value2={value2} onCalculate={handleCalculate} />
            {result !== null && <Text >Resultado: {result}</Text>}
            </View>
            <View></View>
        </BodyComponent>
    </View>
  )
}

export default Pantalla2
