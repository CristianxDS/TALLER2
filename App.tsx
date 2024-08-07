import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import StackNavegator from './src/navegator/StackNavegator';
import { NavigationContainer } from '@react-navigation/native';
const App=()=> {
  return (
    <NavigationContainer>
      <StackNavegator/>
    </NavigationContainer>
)}
export default App