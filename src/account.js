import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import avatar from '../src/asset/TechStore.png';

export default function Account({navigation}) {


  return (
    <View style={styles.container}>
      
        <Text>Thong tin tai khoan</Text>

      <StatusBar style="auto" />
    </View>
    
  );

  


}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
    width: '100%',
    flex: 1,
   
  },
});