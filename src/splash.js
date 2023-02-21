import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import avatar from '../src/asset/TechStore.png';

export default function Splash({navigation}) {
    setTimeout(() => {
        navigation.replace('Login')
    }, 2000);

  return (
    <View style={styles.container}>
      <Image source={avatar}/>
      <StatusBar style="auto" />
      
    </View>
    
  );

  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ABFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});