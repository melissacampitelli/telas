import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Image
        source={ { uri: 'https://sgedu.suportegerencial.com.br/login/assets/images/logo_sgedu.png'} }
        style={ styles.img }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  img: {
    marginBottom:100,
    marginLeft: 30,
    width: 350,
    height: 150
  }
});