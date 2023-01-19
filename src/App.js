import { StatusBar } from 'expo-status-bar';
import {telalogin} from './src/telalogin'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <telalogin> </telalogin>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
