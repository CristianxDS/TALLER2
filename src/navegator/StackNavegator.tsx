import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1 from '../Screen/Pantalla1';
import Pantalla2 from '../Screen/Pantalla2';

const Stack = createStackNavigator();
const StackNavegator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Pantalla1} />
      <Stack.Screen name="Pantalla2" component={Pantalla2} />
    </Stack.Navigator>
  );
}
export default StackNavegator